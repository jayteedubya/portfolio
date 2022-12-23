import Header from '../components/header.js';
export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className='content'> Welcome! </h1>
      <br/>
      <p className='content'>
        Hello and welcome to my portfolio site! My name is Jacob Williams and I am a software developer.
        My primary interests in the software sphere are backend, embedded, dev ops, and machine learning.
        My experience is fairly varied, having dabbled in everything from the last sentence plus some front end developement.
        I am self-taught/not formallly trained and have been writing code in some capacity since I was sixteen.
        For more on my experience and knowledge, check out my resume pages, where you'll find a pdf of my current resume, 
        as well as a breakdown of the skills I have and how I have applied them.
      </p>
    </div>
  )
}
