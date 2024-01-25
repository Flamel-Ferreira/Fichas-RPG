import { useEffect, useState} from "react"
import { FichaDetetive } from "../../components/FichaDetetive"
import { DetetivesContainer } from "./style"
import { api } from "../../services"
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
    }, [])

    return(
        <DetetivesContainer>

            {list && list.map((detetive)=>{
                return(
                    <FichaDetetive propriedadeFicha={detetive}/>
                )
            })}
        </DetetivesContainer>
    )
} 