import {Outlet } from "react-router";
export default function MainLayout()
{
    return (
        <div id="main-layout">
            <h1>Main Layout</h1>
        
            <main>
                <Outlet/>
            </main>
        </div>
    )
}