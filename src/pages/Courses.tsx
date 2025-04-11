import { NavLink } from "react-router";

export default function CoursesPage()
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
        <h1>Courses</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ducimus, 
            accusamus! Aperiam libero molestiae voluptate tempore dolore ducimus minima.
        </p>
      </>
    );

}