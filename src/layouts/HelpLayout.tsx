import { NavLink, Outlet } from "react-router";
export default function HelpLayout()
{
    return (
        <div id="help-layout">
            
            <h1>Help</h1>
        
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. 
                     Illum est nesciunt eaque modi,
                      minima voluptas dolorum. Asperiores
                     quos laudantium molestias!
                </p>
                <nav>
              
              <NavLink to="contact">Contact</NavLink>  
              <NavLink to="faq">FAQ</NavLink>  
            </nav>
            <Outlet/>
        </div>
    );
}
