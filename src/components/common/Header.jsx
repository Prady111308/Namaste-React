
import {Link} from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import useOnlineStatus from '../../hooks/useOnlineStatus';
import { useContext } from 'react';
import userContext from '../../hooks/UserContext';
import { useSelector } from 'react-redux';
import logo from '../../Images/foodLogo.png';


const Header = () =>{ 
  const onlineStatus = useOnlineStatus();
  const {defaultUser} = useContext(userContext);

  const cartItems = useSelector((store)=> store.cart.items);


    return <div className="flex w-100 h-28 flex-wrap justify-between py-2 px-5 bg-white shadow-md">
      <div className="h-28 leading-[96px]">
        <Link to="/"><img className="w-24 h-24" src={logo}  alt="MY FOOD APP"/></Link>
      </div>
      <div>
        <ul className='flex h-28 leading-[96px]'>
          <li className='px-4 mx-1'>Online Status : { onlineStatus ? '🟢' :'🔴' }</li>
          <Link to="/about" className='px-4 mx-1 transition delay-100 hover:text-orange-600 font-medium'><li>About Us</li></Link>
          <Link to="/contact" className='px-4 mx-1 transition delay-100 hover:text-orange-600'><li>Contact Us</li></Link>
          <Link to="/grocery" className='px-4 mx-1 transition delay-100 hover:text-orange-600'><li>Grocery</li></Link>
          <Link to="/cart" className='px-2 mx-2 transition delay-100 hover:text-orange-600'><li className='flex items-center space-x-2 relative'><LuShoppingCart/><span> Cart</span> <span className='bg-orange-600 absolute leading-3 p-1 rounded-full left-[-4] bottom-[53] text-white text-md'>{cartItems.length}</span></li></Link>
          <li> 👤 {defaultUser}</li>
         
        </ul>
      </div>
      </div>
}
export default Header;