import './SideBar.css'
import { FaMoneyBills } from "react-icons/fa6";



const SideBar = () => {
    return(
        <div className='SideBarContainer'>
            <div className='Title'>
                <div className='CashIcon'><FaMoneyBills  color='white' size={25}/></div>
                {/* Прошу добавьте правильную иконку и цвет */}
                <div className='FinDash'>FinDash</div>
            </div>
            <div className='Sections'>

            </div>
            <div className='PremiumPlan'>

            </div>
            <div className='Account'>

            </div>
        </div>
    )
}
export default SideBar