import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import Chart from './components/Chart'
import Table from './components/Table'

function App() {
    return (
        <>
            <div className='App'>
                <aside>
                    <SideBar/>
                </aside>
                <div style={{width:'100%'}}>
                    <Header/>
                    <DashBoard/>
                    <Chart/>
                    <Table/>
                </div>
            </div>
        </>
    )
}

export default App