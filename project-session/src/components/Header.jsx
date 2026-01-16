import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";





const Header = () => {  return (
    <header className="header">
            <IoIosSearch className="search-icon" size={25} />
            <input className="input" ctype="text" placeholder="Search transactions..."/>
            <AiOutlineBell className="bell-icon" size={25} color="black"/>
            <div className="fiol"></div>
    </header>
  );
}

export default Header;