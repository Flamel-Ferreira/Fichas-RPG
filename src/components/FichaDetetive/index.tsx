import {Ficha,AreaTitulo,Titulo,AreaImagemPersonagem,ImagemPersonagem,AreaStatus,AreaEfeitos, BotaoEfeitos,AreaStatusPoint,Barra,ContadorVida,BotaoDano,ContadorEnergia,BotaoEnergia,RangeVida, RangeEnergia,TituloHP,TituloMP,AreaSuspensa,AreaAtributos,Atributos,AtributoUnico,AtributoTexto,AreaLevel,PontucaoAtributo,LevelBox,LevelUp,LevelDown,BotaoDado,PontuacaoAdicional,AreaMochila,ItensMochila,ItemMochila,AreaInput,InputMais,InputNomeItem,InputDescricaoItem,AreaAtributoMochila, MenuSuspenso} from "./style.ts"
import Adrenalina from "../../assets/Icones/Efeitos/Adrenalina_Ativo.svg"
import Atordoado from "../../assets/Icones/Efeitos/Atordoado_Ativo.svg"
import Envenenado from "../../assets/Icones/Efeitos/Veneno_Ativo.svg"
import Maldicao from "../../assets/Icones/Efeitos/Maldição_Ativo.svg"
import Marcado from "../../assets/Icones/Efeitos/Marcado_Ativo.svg"
import Machucado from "../../assets/Icones/Efeitos/Machucado_Ativo.svg"
import DadoD20 from "../../assets/Icones/Dado_d20.svg"
import LevelUpIcon  from "../../assets/Icones/Level_UP.svg"
import LevelDownIcon from "../../assets/Icones/Level_DOWN.svg"

import Dano from "../../assets/Icones/Botao_Dano.svg"
import DanoEnergia from "../../assets/Icones/Botao_Dano_Energia.svg"
import { iFichaDetetive } from "../../pages/detetives/types.ts"
import axios from "axios"
import { useState } from "react"
import { Tooltip } from 'react-tooltip'

interface iFicha{
    propriedadeFicha: iFichaDetetive
}

interface iItemMochila{
    id: string; 
    nome: string; 
    descricao: string; 
}

export const FichaDetetive: React.FC<iFicha>= ({
    propriedadeFicha
}) => {

    const [mostrar,setMostrar] = useState(false)

    const [AleatorioForca, setAleatorioForca]               = useState(0)
    const [AleatorioDestreza, setAleatorioDestreza]         = useState(0)
    const [AleatorioInteligencia, setAleatorioInteligencia] = useState(0)
    const [AleatorioConstituicao, setAleatorioConstituicao] = useState(0)
    const [AleatorioCarisma, setAleatorioCarisma]           = useState(0)

    const [nomeNovoItem,setNomeNovoItem]           = useState('')
    const [descricaoNovoItem,setDescricaoNovoItem] = useState('')

    const AtualizarSaude = async (id:number,qtdDanoVida:number,qtdDanoEnergia:number) => {
        try{
            const response = await axios.patch(`http://localhost:3000/detetives/${id}`,{
                "saude": {
                    "vida": {
                        "vidaAtual": propriedadeFicha.saude.vida.vidaAtual - qtdDanoVida,
                        "vidaMaxima": propriedadeFicha.saude.vida.vidaMaxima
                    },
                    "energia": {
                        "energiaAtual": propriedadeFicha.saude.energia.energiaAtual - qtdDanoEnergia,
                        "energiaMaxima": propriedadeFicha.saude.energia.energiaMaxima
                    }
                }
            })
            console.log(response.data)
        }catch{
            console.error("Erro ao atualizar vida:",Error)
        }
        
    }

    const AtualizarEfeitos = async (
            id:number,
            adrenalina:boolean,
            atordoado:boolean,
            envenenado:boolean,
            amaldicoado: boolean,
            marcado:boolean,
            machucado:boolean
        )=>{
        try{
            const response = await axios.patch(`http://localhost:3000/detetives/${id}`,{
                "efeitos": {
                    "adrenalina" : adrenalina ? !propriedadeFicha.efeitos.adrenalina: propriedadeFicha.efeitos.adrenalina,
                    "atordoado"  : atordoado ? !propriedadeFicha.efeitos.atordoado: propriedadeFicha.efeitos.atordoado,
                    "envenenado" : envenenado ? !propriedadeFicha.efeitos.envenenado: propriedadeFicha.efeitos.envenenado,
                    "amaldicoado": amaldicoado ? !propriedadeFicha.efeitos.amaldicoado: propriedadeFicha.efeitos.amaldicoado,
                    "marcado"    : marcado ? !propriedadeFicha.efeitos.marcado: propriedadeFicha.efeitos.marcado,
                    "machucado"  : machucado ? !propriedadeFicha.efeitos.machucado: propriedadeFicha.efeitos.machucado
                }
            })

            console.log(response.data)
        }catch{
            console.error(Error)
        }
    }

    const AtualizarAtributos = async (
        id:number,
        qtdForca: number,
        qtdDestreza: number,
        qtdInteligencia: number,
        qtdConstituicao: number,
        qtdCarisma: number
    )=>{
        try{
            const response = await axios.patch(`http://localhost:3000/detetives/${id}`,{
                "atributos": {
                    "forca": propriedadeFicha.atributos.forca + qtdForca,
                    "destreza": propriedadeFicha.atributos.destreza + qtdDestreza,
                    "inteligencia": propriedadeFicha.atributos.inteligencia + qtdInteligencia,
                    "constituicao": propriedadeFicha.atributos.constituicao + qtdConstituicao,
                    "carisma": propriedadeFicha.atributos.carisma + qtdCarisma
                }
            })

            console.log(response)
        }catch{
            console.error(Error)
        }

    }

    const RolarDado = (atributo:'forca'|'destreza'|'inteligencia'|'constituicao'|'carisma') =>{
        switch(atributo){
            case 'forca':
                if(AleatorioForca === 0){
                    setAleatorioForca(Math.floor(Math.random() * 20) + 1)
                }else{
                    setAleatorioForca(0)
                }
                break

            case 'destreza':
                if(AleatorioDestreza === 0){
                    setAleatorioDestreza(Math.floor(Math.random() * 20) + 1)
                }else{
                    setAleatorioDestreza(0)
                }
                break

            case 'inteligencia':
                if(AleatorioInteligencia === 0){
                    setAleatorioInteligencia(Math.floor(Math.random() * 20) + 1)
                }else{
                    setAleatorioInteligencia(0)
                }
                break

            case 'constituicao':
                if(AleatorioConstituicao === 0){
                    setAleatorioConstituicao(Math.floor(Math.random() * 20) + 1)
                }else{
                    setAleatorioConstituicao(0)
                }
                break

            case 'carisma':    
                if(AleatorioCarisma === 0){
                    setAleatorioCarisma(Math.floor(Math.random() * 20) + 1)
                }else{
                    setAleatorioCarisma(0)
                }
                break
        }

        
        
        
    }

    const AtualizarMochila = async (id:number,mochilaAtt:Array<iItemMochila>)=>{
        try{
            const response = await axios.patch( `http://localhost:3000/detetives/${id}` , {"mochila": mochilaAtt} ) 

            console.log(response)
        }catch(error){
            console.error(error)
        }
    }

    const Submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const MochilaAtual:Array<iItemMochila> = propriedadeFicha.mochila

        const novoItem = {
            "id": Date.now().toString(),
            "nome": nomeNovoItem,
            "descricao": descricaoNovoItem
        }

        MochilaAtual.push(novoItem)

        console.log(MochilaAtual)

        AtualizarMochila(propriedadeFicha.id, MochilaAtual)
        
        setNomeNovoItem('')
        setDescricaoNovoItem('')
    }
    return (
        <Ficha>
            <AreaTitulo>
                <Titulo>{propriedadeFicha.nome}</Titulo>
            </AreaTitulo>

            <AreaImagemPersonagem>
                <ImagemPersonagem src={propriedadeFicha.imgSrc} alt="Imagem do Personagem" />
            </AreaImagemPersonagem>
            
            
            <AreaStatus>
                <AreaEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,true,false,false,false,false,false)}} 
                        active = {propriedadeFicha.efeitos.adrenalina}>
                        <img src  = {Adrenalina} alt = "Adrenalina" />
                    </BotaoEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,false,true,false,false,false,false)}} 
                        active = {propriedadeFicha.efeitos.atordoado}>
                        <img src   = {Atordoado} alt  = "Atordoado" />
                    </BotaoEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,false,false,true,false,false,false)}} 
                        active = {propriedadeFicha.efeitos.envenenado}>
                        <img src  = {Envenenado} alt = "Envenenado" />
                    </BotaoEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,false,false,false,true,false,false)}} 
                        active = {propriedadeFicha.efeitos.amaldicoado}>
                        <img src = {Maldicao} alt   = "Amaldiçoado" />
                    </BotaoEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,false,false,false,false,true,false)}} 
                        active = {propriedadeFicha.efeitos.marcado}>
                        <img src     = {Marcado} alt    = "Alvejado" />
                    </BotaoEfeitos>
                    <BotaoEfeitos 
                        onClick = {()=>{AtualizarEfeitos(propriedadeFicha.id,false,false,false,false,false,true)}} 
                        active = {propriedadeFicha.efeitos.machucado}>
                        <img src   = {Machucado} alt  = "Machudado" />
                    </BotaoEfeitos>
                </AreaEfeitos>
        
                <AreaStatusPoint>
                    <TituloHP>HP</TituloHP>
                    <Barra>
                        <ContadorVida>{propriedadeFicha.saude.vida.vidaAtual}/{propriedadeFicha.saude.vida.vidaMaxima}</ContadorVida>
                        <RangeVida type="range" value={propriedadeFicha.saude.vida.vidaAtual} min='0' max={31}/>
                    </Barra>
                    <BotaoDano onClick={ () => { AtualizarSaude(propriedadeFicha.id,1,0)}}>
                        <img src={Dano} alt="Dano" />
                    </BotaoDano>
                </AreaStatusPoint>

                <AreaStatusPoint>
                    <TituloMP>MP</TituloMP>
                    <Barra>
                        <ContadorEnergia>{propriedadeFicha.saude.energia.energiaAtual}/{propriedadeFicha.saude.energia.energiaMaxima}</ContadorEnergia>
                        <RangeEnergia value={propriedadeFicha.saude.energia.energiaAtual} type="range" min='0' max={23}/>
                    </Barra>
                    <BotaoEnergia onClick={ () => { AtualizarSaude(propriedadeFicha.id,0,1)} }>
                        <img src={DanoEnergia} alt="Energia" />
                    </BotaoEnergia>
                </AreaStatusPoint>
            </AreaStatus>
            
            {mostrar && 
                <AreaAtributoMochila>
                    <AreaAtributos>
                        <Atributos>
                            <h3>Atributos:</h3>
                            <AtributoUnico>
                                <AtributoTexto>
                                    <h4>Força</h4>
                                </AtributoTexto>
                                <AreaLevel>
                                    <PontucaoAtributo>
                                        <h4>{propriedadeFicha.atributos.forca}</h4>
                                    </PontucaoAtributo>
                                    <LevelBox>
                                        <LevelUp   onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,1,0,0,0,0)}}><img src = {LevelUpIcon} alt   = "Level Up" /></LevelUp>
                                        <LevelDown onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,-1,0,0,0,0)}}><img src = {LevelDownIcon} alt = "Level Down" /></LevelDown>
                                    </LevelBox>
                                </AreaLevel>
                                <h3>+</h3>
                                <BotaoDado onClick={()=>{RolarDado("forca")}}><img src={DadoD20} alt="Botão de Dado" /></BotaoDado>
                                <PontuacaoAdicional>
                                    <h4>{AleatorioForca}</h4>
                                </PontuacaoAdicional>
                            </AtributoUnico>

                            <AtributoUnico>
                                <AtributoTexto>
                                    <h4>Destreza</h4>
                                </AtributoTexto>
                                <AreaLevel>
                                    <PontucaoAtributo>
                                        <h4>{propriedadeFicha.atributos.destreza}</h4>
                                    </PontucaoAtributo>
                                    <LevelBox>
                                        <LevelUp   onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,1,0,0,0)}}><img src = {LevelUpIcon} alt   = "Level Up" /></LevelUp>
                                        <LevelDown onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,-1,0,0,0)}}><img src = {LevelDownIcon} alt = "Level Down" /></LevelDown>
                                    </LevelBox>
                                </AreaLevel>
                                <h3>+</h3>
                                <BotaoDado onClick={()=>{RolarDado("destreza")}}><img src={DadoD20} alt="Botão de Dado" /></BotaoDado>
                                <PontuacaoAdicional>
                                    <h4>{AleatorioDestreza}</h4>
                                </PontuacaoAdicional>
                            </AtributoUnico>

                            <AtributoUnico>
                                <AtributoTexto>
                                    <h4>Inteligência</h4>
                                </AtributoTexto>
                                <AreaLevel>
                                    <PontucaoAtributo>
                                        <h4>{propriedadeFicha.atributos.inteligencia}</h4>
                                    </PontucaoAtributo>
                                    <LevelBox>
                                        <LevelUp   onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,1,0,0)}}><img src = {LevelUpIcon} alt   = "Level Up" /></LevelUp>
                                        <LevelDown onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,-1,0,0)}}><img src = {LevelDownIcon} alt = "Level Down" /></LevelDown>
                                    </LevelBox>
                                </AreaLevel>
                                <h3>+</h3>
                                <BotaoDado onClick={()=>{RolarDado("inteligencia")}}><img src={DadoD20} alt="Botão de Dado" /></BotaoDado>
                                <PontuacaoAdicional>
                                    <h4>{AleatorioInteligencia}</h4>
                                </PontuacaoAdicional>
                            </AtributoUnico>

                            <AtributoUnico>
                                <AtributoTexto>
                                    <h4>Constituição</h4>
                                </AtributoTexto>
                                <AreaLevel>
                                    <PontucaoAtributo>
                                        <h4>{propriedadeFicha.atributos.constituicao}</h4>
                                    </PontucaoAtributo>
                                    <LevelBox>
                                        <LevelUp   onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,0,1,0)}}><img src = {LevelUpIcon} alt   = "Level Up" /></LevelUp>
                                        <LevelDown onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,0,-1,0)}}><img src = {LevelDownIcon} alt = "Level Down" /></LevelDown>
                                    </LevelBox>
                                </AreaLevel>
                                <h3>+</h3>
                                <BotaoDado onClick={()=>{RolarDado("constituicao")}}><img src={DadoD20} alt="Botão de Dado" /></BotaoDado>
                                <PontuacaoAdicional>
                                    <h4>{AleatorioConstituicao}</h4>
                                </PontuacaoAdicional>
                            </AtributoUnico>

                            <AtributoUnico>
                                <AtributoTexto>
                                    <h4>Carisma</h4>
                                </AtributoTexto>
                                <AreaLevel>
                                    <PontucaoAtributo>
                                        <h4>{propriedadeFicha.atributos.carisma}</h4>
                                    </PontucaoAtributo>
                                    <LevelBox>
                                        <LevelUp   onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,0,0,1)}}><img src = {LevelUpIcon} alt   = "Level Up" /></LevelUp>
                                        <LevelDown onClick = {()=>{AtualizarAtributos(propriedadeFicha.id,0,0,0,0,-1)}}><img src = {LevelDownIcon} alt = "Level Down" /></LevelDown>
                                    </LevelBox>
                                </AreaLevel>
                                <h3>+</h3>
                                <BotaoDado onClick={()=>{RolarDado("carisma")}}><img src={DadoD20} alt="Botão de Dado" /></BotaoDado>
                                <PontuacaoAdicional>
                                    <h4>{AleatorioCarisma}</h4>
                                </PontuacaoAdicional>
                            </AtributoUnico>
                        </Atributos>
                    </AreaAtributos>

                    <AreaMochila>
                        <h3>Mochila:</h3>
                        <ItensMochila>
                            {propriedadeFicha.mochila && propriedadeFicha.mochila.map((item)=>{
                                return(
                                    <>
                                        <ItemMochila data-tooltip-id={item.id} data-tooltip-html={item.descricao}>{item.nome}</ItemMochila>
                                        <Tooltip id={item.id}/>    
                                    </>
                                )
                            })}

                        
                        </ItensMochila>
                        <AreaInput onSubmit={(e)=>{Submit(e)}}>
                            {/* Fazer um função para enviar os itens para o Back no onSubmit do formulário*/}
                            <InputMais          type = "submit" value = "+" />
                            <InputNomeItem      type = "text" name = 'input-nome'      placeholder = 'Nome do item'      value = {nomeNovoItem} onChange = {(e)=>{setNomeNovoItem(e.target.value)}}/>
                            <InputDescricaoItem type = "text" name = 'input-descricao' placeholder = 'Descrição do Item' value = {descricaoNovoItem} onChange = {(e)=>{setDescricaoNovoItem(e.target.value)}}/>
                            
                        </AreaInput>
                    </AreaMochila>

                </AreaAtributoMochila>
            }

            <AreaSuspensa>
                <MenuSuspenso onClick={()=>{setMostrar(!mostrar)}}>{mostrar? 'Ocultar!' : 'Ver mais!'}</MenuSuspenso>
            </AreaSuspensa>

            
        </Ficha>
    )
}
