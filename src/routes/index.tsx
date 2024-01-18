import { Routes, Route } from "react-router-dom"

export const RoutesPages = () => {
    return(
        <>
            <Routes>
                <Route path = '/'   element        = {<h1>Menu</h1>}/>
                <Route path = '/detetives' element = {<h1>Detetives</h1>}/>
                <Route path = '/npcs' element      = {<h1>Npcs</h1>}/>
                <Route path = '/monstros' element  = {<h1>Monstros</h1>}/>
            </Routes>
        </>
    )
}