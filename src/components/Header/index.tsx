import * as C from './styled'

import Shape from '../../assets/Shape.svg'

export function Header (){


    return(
        <C.Container>
            <C.Content>
                <span> Formulário </span>
                <span> para compra de</span>
                <p>Pacote de Stickers</p>
            </C.Content>

            <img  src={Shape} />
        </C.Container>
    )
}