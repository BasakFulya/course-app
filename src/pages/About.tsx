import { NavLink } from "react-router";

export default function AboutPage()
{
    return (
      <>
      <div>
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
      </nav>
      </div>
        <h1>About</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Repellat atque a vel corporis sapiente eos officiis, aperiam fugit!
        </p>
      </>
    );

}