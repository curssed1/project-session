import './SideBar.css'
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiShapes } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";
import { GiSpiderMask } from "react-icons/gi";
import { RxExit } from "react-icons/rx";

const SideBar = () => {
    return(
        <div className='SideBarContainer'>
            <div className='Title'>
                <div className='CashIcon'><FaMoneyBills  color='white' size={25}/></div>
                <div className='FinDash'>FinDash</div>
            </div>
            <div className='Sections'>
                <div className='SectionContainer'>
                    <div className='Section Chosen'><LuLayoutDashboard size={25}/>Dashboard</div>
                    <div className='Section NotChosen'><IoReceiptOutline size={25}/>Transactions</div>
                    <div className='Section NotChosen'><PiShapes size={25} />Budgets  &  Categories</div>
                    <div className='Section NotChosen'><TbBrandGoogleAnalytics size={25}/>Analytics</div>
                    <div className='Section NotChosen'><IoSettingsOutline size={25}/>Account Settings</div>
                </div>
            </div>
            <div className='PremiumPlan'>
                <div className='PremiumPlanContainer'>
                    <div className='PremiumPlanText'>
                        <h3>Premium Plan</h3>
                        <p>Upgrade to unlock advanced analytics</p>
                    </div>
                    <div className='UpgradeButtonContainer'>
                        <div className='UpgradeButton'>
                            <button>Upgrade Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Account'>
                <div className='AccountContainer'>
                    <GiSpiderMask color='black' size={40} className='Spider-Man'/>
                    {/* Оставьте человека паука */}
                    <div className='AccountText'>
                        <h3>Peter Parker</h3>
                        <p className='ImTiredBoss'>Personal account</p>
                    </div>
                    <RxExit color='black' size={20} fontWeight={600}/>
                </div>
            </div>
        </div>
    )
}
export default SideBar