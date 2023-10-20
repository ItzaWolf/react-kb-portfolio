import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"

function Layouts() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layouts