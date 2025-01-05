import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <title>t4Todo - Your Todo Manager</title>
    <div className='bg-slate-200 min-h-screen max-h-fit relative'>
      <Navbar />
      <Todo />
      <Footer />
    </div></>
  )
}

export default App
