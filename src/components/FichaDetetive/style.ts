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

    & button{
        display: flex;
        align-items: center;
        justify-content: center;
        width:24px;
        height:24px;
        border-radius: 5px;
        cursor:pointer;
        background-color: #79ACBA;
        border: none;
    }
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