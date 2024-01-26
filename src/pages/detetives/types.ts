

export interface iFichaDetetive{
    id: number,
    nome: string,
    imgSrc: string,
    saude: {
        vida:{
            vidaAtual:number,
            vidaMaxima:number
        },
        energia:{
            energiaAtual:number,
            energiaMaxima:number
        },                     
    },
    efeitos:{
        envenenado: boolean,
        amaldicoado: boolean,
        atordoado: boolean,
        marcado: boolean,
        adrenalina: boolean,
        machucado: boolean
    },
    atributos:{
        forca: number,
        destreza: number,
        inteligencia: number,
        constituicao: number,
        carisma: number
    },
    mochila:[
        {
            nome: string,
            descricao: string
        }
    ]
}