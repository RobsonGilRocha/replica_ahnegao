import {BottomBarBox, BottomBox } from './styles'
import {Row, Separator} from './../index'
function BottomBar() {
    return(
        <BottomBarBox >
            <Separator y='50'/>
            <Row justifyContent='justifyContent'>
                <Row column='column' justifyContent='justifyContent'>
                    <Row>
                        <Separator x='90'/>
                        <Separator x='350' y='20'>
                                <BottomBox>
                                    Copyright © 2008-2021 Ah Negão!
                                </BottomBox>
                        </Separator>
                    </Row>
                    <Row>
                        <Separator x='90'/>
                        <Separator x='350' y='20'>
                                <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/politica-de-privacidade">
                                    <BottomBox>
                                        Política de privacidade
                                    </BottomBox>
                                </a>
                        </Separator>
                    </Row>
                    
                </Row>
                <Separator x='500'/>
                <Row>
                    <a style={{textDecoration: 'none'}} href="https://www.facebook.com/ahnegao/">
                    <BottomBox>Facebook</BottomBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://twitter.com/AhNegao">
                    <BottomBox>Twitter</BottomBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://www.instagram.com/ahnegao/">
                    <BottomBox>Instagram</BottomBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/contato">
                    <BottomBox>Contato</BottomBox></a>
                </Row>
                <Separator x='10'/>
            </Row>     
        </BottomBarBox>
    );
}
export default BottomBar;
