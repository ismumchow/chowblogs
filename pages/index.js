import Head from 'next/head'
import React ,{ useState, useEffect } from 'react'
import CreatePost from '../components/CreatePost'
import fire from '../config/fire-config'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    fire.firestore()
    .collection('blog')
    .onSnapshot(snap => {
      const blogs = snap.docs.map(doc => ({
        id : doc.id,
        ...doc.data()
      }));
      setBlogs(blogs);
    }, console.error);
  }, [])
  console.log(blogs)
  return (
    <div className = {styles.main}> 
      <Head> 
        <title> Blog App </title>
      </Head>
      <h1 className = {styles.title}> Blogs </h1>
      <div className = {styles.card}> 
        <ul> 
          {blogs.map (blog => (
             <h5 key = {blog.id}>
              <Link href ="/blog/[id]" as = {'/blog/' + blog.id}> 
                {blog.title} 
              </Link>  
             </h5>
          ))}
        </ul>
     </div>
     <div className = {styles.card}> 
      <CreatePost />
      </div>
    </div>
  )
}

export default Home;