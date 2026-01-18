import "./Table.css";
import { FaArrowRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaMoneyBills } from "react-icons/fa6";
import { TiCoffee } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMovieCreation } from "react-icons/md";

const Table = () => {  
    return (
        <div className="TableContainer">
            <div className="Table">
                <div className="TableTitle">
                    <div className="TableName">Recent Transactions</div>
                    <div className="SeeAllButton">See All <FaArrowRight size={10}/></div>
                </div>
                <div className="TableInfo">
                    <table>
                        <thead>
                            <tr className="TableCategory">
                                <th className="thName">Name</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="NameSection">
                                    <div className="TableIcon">
                                        <GoHome color="#4f8af6" size={15}/>
                                    </div>
                                    <div>
                                        <h3 className="TableNameCategory">Apartment Rent</h3>
                                        <p className="TableNameSubcategory">Monthly Payment</p>
                                    </div>
                                </td>
                                <td>Housing</td>
                                <td>Dec 1, 2025</td>
                                <td><div className="RedText">-$1,200.00</div></td>
                                <td><div className="StatusCompleted">Completed</div></td>
                            </tr>
                            <tr>
                                <td className="NameSection">
                                    <div className="TableIcon BgGreen">
                                        <FaMoneyBills color="#22c55e" size={15}/>
                                    </div>
                                    <div>
                                        <h3 className="TableNameCategory">Salary Income</h3>
                                        <p className="TableNameSubcategory">Acme Corp</p>
                                    </div>
                                </td>
                                <td>Income</td>
                                <td>Nov 30, 2025</td>
                                <td><div className="GreenText">+$4,200.00</div></td>
                                <td><div className="StatusCompleted">Completed</div></td>
                            </tr>


                            <tr>
                                <td className="NameSection">
                                    <div className="TableIcon BgPurple">
                                        <TiCoffee color="#b88df8" size={17}/>
                                    </div>
                                    <div>
                                        <h3 className="TableNameCategory">Coffee Shop</h3>
                                        <p className="TableNameSubcategory">StarBucks</p>
                                    </div>
                                </td>
                                <td>Food</td>
                                <td>Nov 29, 2025</td>
                                <td><div className="RedText">-$5.75</div></td>
                                <td><div className="StatusCompleted">Completed</div></td>
                            </tr>


                            <tr>
                                <td className="NameSection">
                                    <div className="TableIcon BgYellow">
                                        <MdOutlineShoppingCart color="#eab308" size={15}/>
                                    </div>
                                    <div>
                                        <h3 className="TableNameCategory">Grocery Shopping</h3>
                                        <p className="TableNameSubcategory">Whole Foods</p>
                                    </div>
                                </td>
                                <td>Food</td>
                                <td>Nov 27, 2025</td>
                                <td><div className="RedText">-$89.24</div></td>
                                <td><div className="StatusCompleted">Completed</div></td>
                            </tr>


                            <tr>
                                <td className="NameSection">
                                    <div className="TableIcon BgRed">
                                        <MdMovieCreation color="#ef4444" size={15}/>
                                    </div>
                                    <div>
                                        <h3 className="TableNameCategory">Movie Tickets</h3>
                                        <p className="TableNameSubcategory">AMC Theatres</p>
                                    </div>
                                </td>
                                <td>Entertainment</td>
                                <td>Nov 24, 2025</td>
                                <td><div className="RedText">-$32.50</div></td>
                                <td><div className="StatusCompleted">Completed</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;