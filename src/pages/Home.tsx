import { NavLink } from "react-router";

export default function HomePage()
{
    return (
      <>
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
      </nav>
      <div>
        <h1>Home</h1>
        <p>
            Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Ducimus nesciunt tempore ratione quo, veritatis similique voluptatum 
            dolores recusandae aut nemo!
        </p>
      </div>
      </>
    );

}