import { Link } from 'react-router-dom'

function Navbar() {
     return (
          <div className="navbar ">
               <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl" >Taco-Aw</Link>
               </div>
               <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                         <li>
                              <Link to="/foods" >Foods</Link>
                         </li>
                    </ul>
               </div>
          </div>
     );
}

export default Navbar;
