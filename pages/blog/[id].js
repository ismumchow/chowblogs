import { useEffect, useState } from 'react';
import fire from '../../config/fire-config';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'




const Blog = (props) => {
   const [blog, setBlog] = useState(null)

   useEffect(() => {
       fire.firestore()
       .collection('blog')
       .doc(props.id)
       .get()
       .then(result => {
           setBlog(result.data())
       }, console.error)
   }, [])

   if(!blog) return <h2> Loading ...</h2>
  
    return (
        <div className = {styles.main} >
            <div className = {styles.card}> 
            <h2  >{blog.title}</h2>
            <p>
                {blog.content}
            </p>
            <Link href="/">
                <a>Back</a>
            </Link>
          </div>
        </div>
    )
}

Blog.getInitialProps = ({ query }) => {
    return { 
        id : query.id,
    }
}
export default Blog