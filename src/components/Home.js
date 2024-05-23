import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase"

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // [コレクションから複数のドキュメントを取得する](https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja#get_multiple_documents_from_a_collection)
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log("Home.js getPosts data > ", data);
      // console.log("Home.js getPosts data docs> ", data.docs);
      // console.log("Home.js getPosts data doc> ", data.docs.map((doc) => doc));
      console.log("Home.js getPosts data ...doc.data()> ", data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [])

  // [Cloud Firestore からデータを削除する](https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ja#delete_documents)
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home