import {BottomBarBox, CopBox } from './styles'
import {Row, Separator} from './../index'
function BottomBar() {
    return(
        <BottomBarBox>
            <Separator y='50'/>
            <Row justifyContent='justifyContent'>
            <Separator x='50'/>
                <Row column='column' justifyContent='justifyContent'>
                    <Row>
                        <Separator x='90'/>
                        <Separator x='250' y='20'>
                                <CopBox>
                                    Copyright © 2008-2021 Ah Negão!
                                </CopBox>
                        </Separator>
                    </Row>
                        

                    <a href="https://www.ahnegao.com.br/politica-de-privacidade">
                    <div>Política de privacidade</div></a>
                </Row>
                <Separator x='500'/>
                <Row>
                    <a href="https://www.facebook.com/ahnegao/">
                    <div>Facebook</div></a>
                    <Separator/>
                    <a href="https://twitter.com/AhNegao">
                    <div>Twitter</div></a>
                    <Separator/>
                    <a href="https://www.instagram.com/ahnegao/">
                    <div>Instagram</div></a>
                    <Separator/>
                    <a href="https://www.ahnegao.com.br/contato">
                    <div>Contato</div></a>
                </Row>
            </Row>     
        </BottomBarBox>
    );
}

export default BottomBar;