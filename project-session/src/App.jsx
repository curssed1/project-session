import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import Chart from './components/Chart'
import Table from './components/Table'

function App() {
  return (
    <>
        <div className="container">
            <Header/>
            <DashBoard/>
            <Chart/>
            <Table/>
        </div>
    </>
  )
}

export default App
/* <SideBar/> */