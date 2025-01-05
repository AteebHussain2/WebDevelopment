import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Card.css'

function App() {
  const [cards, setData] = useState([]);

  const fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    setData(data);
    console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map(post => {
          return <div className="card" key={post.id}><span>{post.id}</span>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <span className='user'>By User: {post.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
