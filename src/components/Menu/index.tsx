import { Link } from "react-router-dom"
import { ContainerMenu } from "./style"

export const MenuComponent = () => {
    return(
        <>
            <ContainerMenu>
                <Link to='/'>Menu</Link>
                <Link to='/detetives'>Detetives</Link>
                <Link to='/npcs'>Npcs</Link>
                <Link to='/monstros'>Monstros</Link>
            </ContainerMenu>
        </>
    )
}