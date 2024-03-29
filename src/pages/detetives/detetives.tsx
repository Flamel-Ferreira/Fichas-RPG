import { useEffect, useState} from "react"
import { FichaDetetive } from "../../components/FichaDetetive"
import { DetetivesContainer } from "./style"
import { api } from "../../services"
import { iFichaDetetive } from "./types"
// import { iFichaDetetive } from "./types"

export const DetevitesPage = () => {

    const [list,setList] = useState([])
    

    const handleListChar = async () =>{
        const dados = await api.get('/detetives')

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
            {list && list.map((detetive:iFichaDetetive)=>{
                return(
                    <FichaDetetive propriedadeFicha={detetive} page={'detetives'} key={detetive.id}/>
                )
            })}
        </DetetivesContainer>
    )
} 