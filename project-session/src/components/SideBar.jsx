import './SideBar.css'
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiShapes } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";

const SideBar = () => {
    return(
        <div className='SideBarContainer'>
            <div className='Title'>
                <div className='CashIcon'><FaMoneyBills  color='white' size={25}/></div>
                <div className='FinDash'>FinDash</div>
            </div>
            <div className='Sections'>
                <div className='SectionContainer'>
                    <div className='Section'><LuLayoutDashboard size={20}/>Dashboard</div>
                    <div className='Section'><IoReceiptOutline size={20}/>Transactions</div>
                    <div className='Section'><PiShapes size={20} />Budgets & Categories</div>
                    <div className='Section'><TbBrandGoogleAnalytics size={20}/>Analytics</div>
                    <div className='Section'><IoSettingsOutline size={20}/>Account Settings</div>
                </div>
            </div>
            <div className='PremiumPlan'>

            </div>
            <div className='Account'>

            </div>
        </div>
    )
}
export default SideBar