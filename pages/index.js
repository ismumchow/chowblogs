import Head from 'next/head'
import React ,{ useState} from 'react'
import CreatePost from '../components/CreatePost'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [blogs,setBlogs] = useState([]);
  return (
    <div> 
      <Head> 
        <title> Blog App </title>
      </Head>
      <h1> Blog 1 </h1>
      <CreatePost />
    </div>
  )
}

export default Home;