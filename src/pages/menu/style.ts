import styled from "styled-components";

export const MenuContainer = styled.div`
    width:100vw;
    height: 100vh;
    min-height: 650px;
    display: flex;
    align-items: start;
    justify-content: center;
`

export const Form = styled.form`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
`

export const Title = styled.h1`
    color: #009CC6;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom:20px;
`

export const StyledInputText = styled.input`
    width:100%;
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: transparent;
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: #009CC6;

    &:focus{ 
        border:2px solid #009CC6;
    }

    &:active{
        border:2px solid #009C70;
        transition: .2s;
    }
`
export const StyledSubmit = styled.input`
    width: 150px;
    padding: 16px 24px;
    border-radius: 25px;
    border:none;
    background-color: #004E63;
    font-size: 20px;
    font-weight: bold;

    &:hover{
        background-color: #009CC6;
    }

    &:active{
        background-color: #009C90;
    }
`
export const StyledSelect = styled.select`
    width:100%;
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: gray;
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: white;

    &:focus{ 
        border:2px solid #009CC6;
    }

    &:active{
        border:2px solid #009C70;
        transition: .2s;
    }

    
`