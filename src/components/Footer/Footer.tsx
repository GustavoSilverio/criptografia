import * as Styled from './Footer.styled'

export const Footer = () => {

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();

    return (
        <Styled.Footer>
            <h1>{ano} © Gustavo Silvério & Breno Cardozo</h1>
        </Styled.Footer>
    )
}