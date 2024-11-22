import './styles/header.css';
import img from '../assets/img/btn.svg';
function Header(props) {
    return (<div>
        <div className='dropdown'>
            <button className='drp-click'>
                <img src={img}width="30" height="30"></img>
            </button>
            <div className='dropdown-content'>
                <button className='drp-content' >About Me</button>
                <button className='drp-content' >Skills</button>
                <button className='drp-content' >Project</button>
            </div>
        </div>

    </div>)
  }
  
  export default Header;