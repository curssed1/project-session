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
                <main>
                    <Header/>
                    <DashBoard/>
                    <Chart/>
                    <Table/>
                </main>
            </div>
        </>
    )
}

export default App