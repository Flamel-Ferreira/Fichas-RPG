import styled from "styled-components";

export const Ficha = styled.div`
    width:100%;
    max-width: 300px;
`
export const AreaTitulo = styled.div`
    width: 100%;
    padding: 8px 16px;
    background-color: #9CCACD;
    border-radius: 15px 15px 0 0;
`
export const Titulo = styled.h3`
    font-weight:500;
    color: #004E63;
    font-size: 16px;
`
export const AreaImagemPersonagem = styled.div`
    width:100%;
    height:300px;
    overflow:hidden;
    background-color: #004E63;
`
export const ImagemPersonagem = styled.img`
    width:100%;    
`
export const AreaStatus = styled.div`
    display:flex;
    flex-direction: column;
    gap:12px;
    background-color: #9CCACD;
    padding: 16px 0;
`
export const AreaEfeitos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 0 8px;
`

interface iBotaoEfeitos{
    ativo: string;
}
export const BotaoEfeitos = styled.button<iBotaoEfeitos>`
    display: flex;
    align-items: center;
    justify-content: center;
    width:24px;
    height:24px;
    border-radius: 5px;
    cursor:pointer;
    background-color: #79ACBA;
    border: none;
    opacity: ${({ativo})=>{
        switch(ativo){
            case 'true':
                return '100%';
            case 'false':
                return '50%';
        }
    }};
`

export const AreaStatusPoint = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width:100%;
    padding: 0 8px;
`
export const TituloHP = styled.label`
    font-size: 20px;
    color: darkgreen;
`
export const Barra = styled.div`
    width: 80%;
    max-width:100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    
`
export const ContadorVida = styled.label`
    font-size: 12px;
    color: #2FA12C;
`
export const RangeVida = styled.input`
    width: 100%;
    appearance: none;
    display: block;
    background-color: #2FA12C;
    height: 12px;
    border-radius: 5px;
    overflow: hidden;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height:10px;
        width:8px;
        /* overflow:hidden; */
        cursor: pointer;
        background-color: #4EFF4A;
        box-shadow: -200px 0 0 200px #4EFF4A;
    }
`
export const BotaoDano = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CC3C3C;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:active{
        background-color: #630606; 
    }
    & img{
        scale: 0.7;
    }
`
export const ContadorEnergia = styled.label`
    font-size: 12px;
    color: #A1872C;
`
export const TituloMP = styled.label`
    font-size: 20px;
    color: #A1872C;
`
export const BotaoEnergia = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFD74A;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:active{
        background-color: #A1872C; 
    }
    & img{
        scale: 0.7;
    }
`
export const RangeEnergia = styled.input`
    width: 100%;
    appearance: none;
    display: block;
    background-color: #A1872C;
    height: 12px;
    border-radius: 5px;
    overflow: hidden;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height:10px;
        width:8px;
        /* overflow:hidden; */
        cursor: pointer;
        background-color: #FFD74A;
        box-shadow: -200px 0 0 200px #FFD74A;
    }
`
export const AreaSuspensa = styled.div`
    width: 100%;
    padding: 8px 16px;
    background-color: #9CCACD;
    border-radius: 0 0 15px 15px;
    text-align: end;
`
export const MenuSuspenso = styled.button`
    color: #004E63;
    background-color: #9CCACD;
    border: none;
    cursor: pointer;
    font-weight: 400;
`

//ATRIBUTOS E MOCHILA:
export const AreaAtributoMochila = styled.div`

`

//ATRIBUTOS:
export const AreaAtributos = styled.div`

    padding: 1.5rem 1rem;
    background-color: #79ACBA;
    
`
export const Atributos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & h3{
        color: black;
    }
`
export const AtributoUnico = styled.div`
    display:flex;
    gap: 1rem;
    align-items: center;
`
export const AtributoTexto = styled.div`
    width: 40%;

    & h4{
        color: black;
    }
`
export const AreaLevel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.225rem;
`
export const PontucaoAtributo = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;


    & h4{
        color: black;
    }
`
export const LevelBox = styled.div`
    height: 24px;
    display:flex;
    justify-content:center;
    flex-direction: column;
    position: relative;
`
export const LevelUp = styled.button`
    cursor: pointer;
    border:none;
    position: absolute;
    height:12px;
    border-radius: 2px 2px 0 0;
    transform: translateY(-6px);
`
export const LevelDown = styled.button`
    height:12px;
    cursor: pointer;
    border:none;
    position: relative;
    border-radius: 0 0 2px 2px;
    transform: translateY(6px);

`
export const BotaoDado = styled.button`
    cursor:pointer;
    background-color: transparent;
    border: none;
    height: 24px;

    &:hover{
        background-color: pink;
        border-radius: 5px;
    }

    &:active{
        background-color: red;
        border-radius: 5px;
    }
`
export const PontuacaoAdicional = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;


    & h4{
        color: black;
    }
`

//Mochila

export const AreaMochila = styled.div`
    padding: 1.5rem 1rem;
    background-color: #9CCACD;

    & h3{
        color:black;
    }
`
export const ItensMochila = styled.div`
    padding: 1rem; 
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
`
export const ItemMochila = styled.h4`
    background-color: #79ACBA;
    padding: 0.25rem 1rem;
    border-radius: 1.25rem;
    color: black;
`
export const AreaInput = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem ;
    width:100%;
`
export const InputMais = styled.input`
    width: 2rem;
    height: 2rem;
    border:none;
    border-radius:50%;
    color: #79ACBA;
    background-color: white;
    font-size: 1.5rem;
    font-weight: 500;
    cursor:pointer;

    &:hover{
        background-color: #79ACBA;
        color: white;
    }

    &:active{
        background-color: #9CCACD;
        color: white;
    }
`
export const InputNomeItem = styled.input`
    width:calc(100% - 3rem);
    height: 2rem;
    padding: 0 1rem;
    border:none;
    border-radius:1.5rem;
    color: black;
    
    &::placeholder{
        color: #79ACBA
    }

    &:focus-visible{
        outline: none;
    }
    
    
`
export const InputDescricaoItem = styled.input`
    width:100%;
    height: 2rem;
    padding: 0 1rem;
    border:none;
    border-radius:1.5rem;
    color: black;
    
    &::placeholder{
        color: #79ACBA
    }

    &:focus-visible{
        outline: none;
    }
    
    
`