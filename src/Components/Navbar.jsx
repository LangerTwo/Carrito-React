import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import CartContext from "../Context/CartContext";

const Navbar = () => {
    const context = useContext(CartContext)
    const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed bg-gray-50 z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
            <NavLink to="/">
                Shopi
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/" 
                onClick={() => context.setSearchByCategory('')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                All
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/clothes" 
                onClick={() => context.setSearchByCategory('clothes')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                Clothes
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/electronics" 
                onClick={() => context.setSearchByCategory('electronics')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/furniture" 
                onClick={() => context.setSearchByCategory('furniture')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                Furniture
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/shoes" 
                onClick={() => context.setSearchByCategory('shoes')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                Shoes
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/miscellaneous" 
                onClick={() => context.setSearchByCategory('miscellaneous')}
                className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                Miscellaneous
            </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
            adr@example.com
        </li>
        <li>
            <NavLink to="/my-order" className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Orders
            </NavLink>
        </li>
        <li>
            <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Account
            </NavLink>
        </li>
        <li>
            <NavLink to="/sing-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                Sing In
            </NavLink>
        </li>
        <li className="flex gap-2 items-center">
            <BsCartPlusFill className="w-5 h-5"/> {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
