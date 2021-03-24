// pages/users/register.js
import { useState } from 'react'; 
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import styles from "../../styles/login.module.css"

const Register = () => {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [notification, setNotification] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      setNotification(
       'Password and password confirmation does not   match'
      )
      setTimeout(() => {
        setNotification('')
      }, 2000)
      setPassword('');
      setPassConf('');
      return null;
      }
    fire.auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message)
      });
    router.push("/")
  }
  return (
    <div className = {styles.main}>
      <h1>Create new user</h1>
        {notification}
      <form className= {[styles.main, styles.antimargin].join(" ")} onSubmit={handleLogin}>
        Email: <input type="text" value={userName} 
        onChange={({target}) => setUsername(target.value)} /> 
        <br />
        Password: <input type="password" value={password} 
        onChange={({target}) => setPassword(target.value)} /> 
        <br />
        Confirm Password: <input type="password" value={passConf}    
        onChange={({target}) => setPassConf(target.value)} /> 
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Register