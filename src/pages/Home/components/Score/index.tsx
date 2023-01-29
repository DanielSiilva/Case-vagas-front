import { Minus, Plus } from 'phosphor-react'
import * as C from './styled'

interface CountProps{
    count: number,
    updateCount: () => void,
    updateMinusCount: () => void
}

export function Score  ({count, updateCount, updateMinusCount}: CountProps) {

    function handleMais (){
        updateCount()
    }

    function handleMenus (){
        updateMinusCount()
    }

    return(
        <C.Container>
            <span>Quantos stickers de Cada?</span>

            <div>
                <Minus onClick={handleMenus} />
                <p>{count}</p>
                <Plus onClick={handleMais} />
            </div>
           
        
        </C.Container>
    )
}