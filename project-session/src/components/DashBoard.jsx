import "./DashBoard.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuPiggyBank } from "react-icons/lu";

const DashBoard = () => {  
    return (
        <div className="DashBoardContainer">
            <div className="DashBoardInfo">
                <div className="DashBoardText">
                    Financial Dashboard
                </div>
                <div className="DashBoardCalendar">
                    <div className="CalendarButton"><MdOutlineCalendarMonth /> Last 30 Days <MdArrowDropDown /></div>
                    <div className="PlusButton"><FaPlus /></div>
                </div>
            </div>
            <div className="DashBoardBanners">
                <div className="Banner">
                    <div className="BannerName">
                        <div><p>Balance</p></div>
                        <div className="TrendingUp"><IoIosTrendingUp /></div>
                    </div>
                    <div className="BannerText">
                        <h1>$24,562.00</h1>
                        <p>
                            <span className="GreenText">+2.45%</span> from last month
                        </p>
                    </div>
                </div>
                <div className="Banner">
                    <div className="BannerName">
                        <div><p>Income</p></div>
                        <div className="MoneyBills"><FaMoneyBills  /></div>
                    </div>
                    <div className="BannerText">
                        <h1>$8,350.00</h1>
                        <p>
                            <span className="GreenText">+5.35%</span> from last month
                        </p>
                    </div>
                </div>
                <div className="Banner">
                    <div className="BannerName">
                        <div><p>Expenses</p></div>
                        <div className="ShoppingCart"><HiOutlineShoppingCart /></div>
                    </div>
                    <div className="BannerText">
                        <h1>$5,120.00</h1>
                        <p>
                            <span className="RedText">+1.23%</span> from last month
                        </p>
                    </div>
                </div>
                <div className="Banner">
                    <div className="BannerName">
                        <div><p>Savings Rate</p></div>
                        <div className="Bank"><LuPiggyBank /></div>
                    </div>
                    <div className="BannerText">
                        <h1>38.6%</h1>
                        <p>
                            <span className="GreenText">+3.2%</span> from last month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;