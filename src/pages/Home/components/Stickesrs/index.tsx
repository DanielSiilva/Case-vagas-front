import { CheckSquare, Square } from "phosphor-react"

import * as C from './styled'

interface stickerProps {
    name: string
}



export function Stickers ({name}: stickerProps){

  



    return (
        <>
            <C.Container>
                <input type={"checkbox"}  required/>
                <p>{name}</p>
            </C.Container>
        
        </>
    )

}