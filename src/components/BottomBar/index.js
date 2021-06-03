import {BottomBarBox } from './styles'

function BottomBar() {
    return(
        <BottomBarBox>
            Copyright © 2008-2021 Ah Negão!
            <a href="https://www.ahnegao.com.br/politica-de-privacidade">
            <div>Política de privacidade</div></a>
            <a href="https://www.facebook.com/ahnegao/">
            <div>Facebook</div></a>
            <a href="https://twitter.com/AhNegao">
            <div>Twitter</div></a>
            <a href="https://www.instagram.com/ahnegao/">
            <div>Instagram</div></a>
            <a href="https://www.ahnegao.com.br/contato">
            <div>Contato</div></a>    
        </BottomBarBox>
    );
}

export default BottomBar;