import { Routes, Route } from "react-router-dom"
import { DetevitesPage } from "../pages/detetives/detetives"
import { MenuPage } from "../pages/menu/menu"
import { NpcsPage } from "../pages/npcs"
import { MonstrosPage } from "../pages/monstros"
import { RouterContainer } from "./style"

export const RoutesPages = () => {
    return(
        <RouterContainer>
            <Routes>
                <Route path = '/'   element        = {<MenuPage/>}/>
                <Route path = '/detetives' element = {<DetevitesPage/>}/>
                <Route path = '/npcs' element      = {<NpcsPage/>}/>
                <Route path = '/monstros' element  = {<MonstrosPage/>}/>
            </Routes>
        </RouterContainer>
    )
}