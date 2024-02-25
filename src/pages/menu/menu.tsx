import { MenuContainer, Form ,Title, StyledInputText, StyledSubmit, StyledSelect} from './style'
import { useState } from 'react'
import axios from 'axios'

export const MenuPage = () => {

    const [page,setPage]                       = useState('detetives')
    const [nomePersonagem,setNomePersonagem]   = useState('')
    const [caminho,setCaminho]                 = useState('')
    const [attForca,setAttForca]               = useState<number>(0)
    const [attDestreza,setAttDestreza]         = useState<number>(0)
    const [attInteligencia,setAttInteligencia] = useState<number>(0)
    const [attConstituicao,setAttConstituicao] = useState<number>(0)
    const [attCarisma,setAttCarisma]           = useState<number>(0)

    const handleInputChange = (e:any,input:string) =>{

        const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;

        switch (input) {
            case 'nome':
                setNomePersonagem(value)
                break;
            case 'caminho':
                setCaminho(value)
                break;
            case 'attForca':
                setAttForca(value)
                break;
            case 'attDestreza':
                setAttDestreza(value)
                break;
            case 'attInteligencia':
                setAttInteligencia(value)
                break;
            case 'attConstituicao':
                setAttConstituicao(value)
                break;
            case 'attCarisma':
                setAttCarisma(value)
                break;
            default:
                break;
        }
    }

    const handlePageChange = (e:any) =>{
        setPage(e.target.value)
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try{
            const response = await axios.post(`http://localhost:3000/${page}`,{
                "id": (Math.ceil(Math.random()*10000)).toString(),
                "nome": nomePersonagem,
                "imgSrc": `./src/assets/Protagonistas/${caminho}.png`,
                "saude": {
                    "vida": {
                        "vidaAtual": Math.ceil((attConstituicao+0.25*attForca)*2),
                        "vidaMaxima": Math.ceil((attConstituicao+0.25*attForca)*2)
                    },
                    "energia": {
                        "energiaAtual": Math.ceil((attConstituicao)*1.75),
                        "energiaMaxima": Math.ceil((attConstituicao)*1.75)
                    }
                },
                "efeitos": {
                    "adrenalina": false,
                    "atordoado": false,
                    "envenenado": false,
                    "amaldicoado": false,
                    "marcado": false,
                    "machucado": false
                },
                "atributos": {
                    "forca": attForca,
                    "destreza": attDestreza,
                    "inteligencia": attInteligencia,
                    "constituicao": attConstituicao,
                    "carisma": attCarisma
                },
                "mochila": []
            })
            console.log(response)
            alert('Cadastrado!')
        }catch{
            console.error("Erro ao cadastrar personagem:",Error)
        }
        
    }
    return(
        <MenuContainer>
            <Form>
                <Title>INSERIR NOVO PERSONAGEM</Title>
                <StyledSelect onChange={(e)=>{handlePageChange(e)} }>
                    <option value="detetives">Detetive</option>
                    <option value="npcs">NPC</option>
                    <option value="monstros">Monstro</option>
                </StyledSelect>
                <StyledInputText type='text' placeholder='Nome Personagem' onChange={(e)=>{handleInputChange(e,'nome')}}/>
                <StyledInputText type='text' placeholder='Caminho Imagem'  onChange={(e)=>{handleInputChange(e,'caminho')}}/>
                <Title>Atributos</Title>
                <StyledInputText type = 'number' placeholder = 'Força'        onChange = {(e)=>{handleInputChange(e,'attForca')}}/>
                <StyledInputText type = 'number' placeholder = 'Destreza'     onChange = {(e)=>{handleInputChange(e,'attDestreza')}}/>
                <StyledInputText type = 'number' placeholder = 'Inteligência' onChange = {(e)=>{handleInputChange(e,'attInteligencia')}}/>
                <StyledInputText type = 'number' placeholder = 'Constituição' onChange = {(e)=>{handleInputChange(e,'attConstituicao')}}/>
                <StyledInputText type = 'number' placeholder = 'Carisma'      onChange = {(e)=>{handleInputChange(e,'attCarisma')}}/>
                <br/>
                <StyledSubmit type='submit' value='Cadastrar' onClick={(e)=>{handleSubmit(e)}}/>


            </Form>
        </MenuContainer>
    )
}