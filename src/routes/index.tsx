import { Routes, Route } from "react-router-dom"
import { DetevitesPage } from "../pages/detetives"
import { MenuPage } from "../pages/menu"
import { NpcsPage } from "../pages/npcs"
import { MonstrosPage } from "../pages/monstros"

export const RoutesPages = () => {
    return(
        <>
            <Routes>
                <Route path = '/'   element        = {<MenuPage/>}/>
                <Route path = '/detetives' element = {<DetevitesPage/>}/>
                <Route path = '/npcs' element      = {<NpcsPage/>}/>
                <Route path = '/monstros' element  = {<MonstrosPage/>}/>
            </Routes>
        </>
    )
}