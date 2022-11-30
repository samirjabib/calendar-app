import { AppRouter } from "../../router"
import { NavBar } from "../components/NavBar"

export const Layout = () => {
    return(
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}