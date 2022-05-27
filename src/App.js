import React, {useState} from 'react';
import Banner from './Banner.js'
import styles from './Style.module.css';
import Footer from "./Footer"



function App() {
  const limit=parseInt(10000);
  const placeholder=`Text should not be more than ${limit} characters. 
  Every fullstop should be preceded with a space before the next sentence begins.`
    const [error,setError]=useState('')
    const [text,setText] =useState('');

  
  
   const transcribeText= async() =>{
     setError("")
     if (!text){
       setError('No text entered')
       return
     }
        try{
        const utt=new SpeechSynthesisUtterance(text);
        utt.volume=1
        utt.rate=1.1
        utt.pitch=5
        speechSynthesis.speak(utt)
    } catch(error){
      setError(error.message) }
    }
      
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <h3 className={styles.heading}>React Speech Synthesis Demo</h3>
        <div className={styles.form}>
          <textarea placeholder={placeholder}  maxLength={limit} className={styles.textarea} onChange={(e) => {setText(e.target.value)}} rows="10" cols="50"></textarea>
          <p className={styles.indicator}>({text.length})/{limit} Characters</p>
       </div>
      <div className={styles.control}><button onClick={transcribeText}>Read Aloud</button></div>
    {error &&  <p className={styles.error}>ERROR: {error} </p>}
    </div>  
    <Footer/>
    </div>
  )
}

export default App;
