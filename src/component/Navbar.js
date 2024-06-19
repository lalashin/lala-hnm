import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { faSearch,faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "Women",
        "Men",
        "Baby",
        "Kids",
        "H&M HOME",
        "Sport",
        "Sale",
        "지속가능성",
    ];

    const navigate = useNavigate();
    const goToLogin=()=>{
      navigate("/login");
    };

    const goToLogout =()=>{
      setAuthenticate(false);
    }
    
    const search = (event) => {
      //console.log("key press");
      if (event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
        //console.log("keyword",keyword);
        
      }
    };

    const [isToggled, setIsToggled] = useState(false);
    const handleChange = () => {
      setIsToggled(!isToggled);
    }
   
  return (
    <div>
     <div className='top-menu'>
        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='Search..' onKeyPress={search} />
        </div>
        {authenticate ? (
          <div className='login-button' onClick={goToLogout}>
            <div><FontAwesomeIcon icon={faUser} /></div>            
            <div className='login-txt'>로그아웃</div>
          </div>
        ) :  (
          <div className='login-button' onClick={goToLogin}>
            <div><FontAwesomeIcon icon={faUser} /></div>            
            <div className='login-txt'>로그인</div>
          </div>
        )}
        
       
        
      </div>
      <div className='nav-section'>
        <Link to="/">
          <img width={60} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" alt="" />
        </Link>
        
      </div>
      <div className="mGNB" onClick={handleChange}>
            <div><FontAwesomeIcon icon={faBars} /></div>
      </div>
      <div className={`menu-area ${isToggled ? 'active' : ''}`}>
            <button onClick={()=>(setIsToggled(!isToggled))}><FontAwesomeIcon icon={faXmark} /></button>
            <ul className='menu-list'>
                {menuList.map((menu)=>(
                    <li>{menu}</li>
                ))}    
            </ul>
        
      
      </div>
    </div>
  )
}

export default Navbar
