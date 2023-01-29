import { useState } from "react"
import { ContainerForm } from "./components/Form/Index"
import { Score } from "./components/Score"
import { Stickers } from "./components/Stickesrs"

import * as C from './styled'




export function Home (){
    const [count, setCount] = useState(0)

    function updateCount (){
        setCount((state) => state >= 0? state + 1 : state)
    }

    function updateMinusCount (){
        setCount((state) => state >= 1? state - 1 : state)
    }

    return (

        <C.Container>

            <div>
                <Stickers 
                    name="React"
                />

                <Stickers 
                    name="Vue"
                />

                <Stickers 
                    name="Angular"
                />
            </div>
         
            

            <Score
                count={count}
                updateCount={updateCount}
                updateMinusCount={updateMinusCount}
            />

            <ContainerForm />

        
        </C.Container>
    )
}