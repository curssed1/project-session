import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import DashBoard from './components/DashBoard'

function App() {
  return (
    <>
        <div className="container">
            <Header/>
            <DashBoard/>
        </div>
    </>
  )
}

export default App
/* <SideBar/> */