import { Link, Outlet} from "react-router";
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
              
              <Link to="contact">Contact</Link>  
              <Link to="faq">FAQ</Link>  
            </nav>
            <Outlet/>
        </div>
    );
}
