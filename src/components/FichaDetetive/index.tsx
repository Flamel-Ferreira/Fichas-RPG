import {Ficha,AreaTitulo,Titulo,AreaImagemPersonagem,ImagemPersonagem,AreaStatus,AreaEfeitos,AreaStatusPoint,Barra,ContadorVida,BotaoDano,ContadorEnergia,BotaoEnergia,RangeVida, RangeEnergia,TituloHP,TituloMP,AreaSuspensa, MenuSuspenso} from "./style.ts"

import ElizabethEllen from "../../assets/Protagonistas/Elizabeth Ellen.png"

import Adrenalina from "../../assets/Icones/Efeitos/Adrenalina_Ativo.svg"
import Atordoado from "../../assets/Icones/Efeitos/Atordoado_Ativo.svg"
import Envenenado from "../../assets/Icones/Efeitos/Veneno_Ativo.svg"
import Maldicao from "../../assets/Icones/Efeitos/Maldição_Ativo.svg"
import Marcado from "../../assets/Icones/Efeitos/Marcado_Ativo.svg"
import Machucado from "../../assets/Icones/Efeitos/Machucado_Ativo.svg"

import Dano from "../../assets/Icones/Botao_Dano.svg"
import DanoEnergia from "../../assets/Icones/Botao_Dano_Energia.svg"

export const FichaDetetive = () => {
    return (
        <Ficha>
            <AreaTitulo>
                <Titulo>Elizabeth Ellen</Titulo>
            </AreaTitulo>

            <AreaImagemPersonagem>
                <ImagemPersonagem src={ElizabethEllen} alt="Imagem do Personagem" />
            </AreaImagemPersonagem>
            
            
            <AreaStatus>
                <AreaEfeitos>
                    <button><img src = {Adrenalina} alt = "Adrenalina" /></button>
                    <button><img src = {Atordoado} alt  = "Atordoado" /></button>
                    <button><img src = {Envenenado} alt = "Envenenado" /></button>
                    <button><img src = {Maldicao} alt   = "Amaldiçoado" /></button>
                    <button><img src = {Marcado} alt    = "Alvejado" /></button>
                    <button><img src = {Machucado} alt  = "Machudado" /></button>
                </AreaEfeitos>
        
                <AreaStatusPoint>
                    <TituloHP>HP</TituloHP>
                    <Barra>
                        <ContadorVida>27/31</ContadorVida>
                        <RangeVida type="range" min='0' max={31}/>
                    </Barra>
                    <BotaoDano>
                        <img src={Dano} alt="Dano" />
                    </BotaoDano>
                </AreaStatusPoint>

                <AreaStatusPoint>
                    <TituloMP>MP</TituloMP>
                    <Barra>
                        <ContadorEnergia>13/23</ContadorEnergia>
                        <RangeEnergia type="range" min='0' max={23}/>
                    </Barra>
                    <BotaoEnergia>
                        <img src={DanoEnergia} alt="Energia" />
                    </BotaoEnergia>
                </AreaStatusPoint>
            </AreaStatus>

            <AreaSuspensa>
                <MenuSuspenso>Ocultar</MenuSuspenso>
            </AreaSuspensa>

            
        </Ficha>
    )
}
