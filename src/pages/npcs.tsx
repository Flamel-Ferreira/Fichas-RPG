import { useEffect, useState} from "react"
import { FichaDetetive } from "../components/FichaDetetive"
import { DetetivesContainer } from "./detetives/style"
import { api } from "../services"
// import { iFichaDetetive } from "./types"

export const NpcsPage = () => {

    const [list,setList] = useState([])

    const handleListChar = async () =>{
        const dados = await api.get('/npcs')

        try{
            setList(dados.data)
        }catch{
            console.error()
        }
    }

    useEffect(() => {
        handleListChar()
        
        const intervalId = setInterval(handleListChar, 1000); 

        return () => {
            clearInterval(intervalId); 
        };
    }, [])

    return(
        <DetetivesContainer>
            {list && list.map((detetive)=>{
                return(
                    <FichaDetetive propriedadeFicha={detetive} page={'npcs'}/>
                )
            })}
        </DetetivesContainer>
    )
} 