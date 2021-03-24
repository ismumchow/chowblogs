import { useEffect, useState } from 'react';
import fire from '../../config/fire-config';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'




const Blog = (props) => {
 
    return (
        <div className = {styles.main} >
         <div className = {styles.card}> 
            <h2  >{props.title}</h2>
            <p>{props.content}</p>
            <Link href="/">
                <a>Back</a>
            </Link>
          </div>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const content = {};
    await fire.firestore()
        .collection('blog')
        .doc(query.id)
        .get()
        .then(result => {
            content['title'] = result.data().title
            content['content'] = result.data().content
        });
        return {
            props:{
                title: content.title,
                content: content.content,
            }
        }
}
export default Blog