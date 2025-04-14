import { NavLink , Outlet} from "react-router";
export default function HelpLayout()
{
    return (
        <div id="help-layout">
            
            <h1>Help Layout</h1>
        
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. 
                     Illum est nesciunt eaque modi,
                      minima voluptas dolorum. Asperiores
                     quos laudantium molestias!
                </p>
                     <nav>
              <NavLink to="/" end>
              Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="help">Help</NavLink>  
            </nav>
            <Outlet/>
        </div>
    );
}
