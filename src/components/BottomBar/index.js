import {BottomBarBox, CopBox } from './styles'
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
                                <CopBox>
                                    Copyright © 2008-2021 Ah Negão!
                                </CopBox>
                        </Separator>
                    </Row>
                    <Row>
                        <Separator x='90'/>
                        <Separator x='350' y='20'>
                                <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/politica-de-privacidade">
                                    <CopBox>
                                        Política de privacidade
                                    </CopBox>
                                </a>
                        </Separator>
                    </Row>
                    
                </Row>
                <Separator x='500'/>
                <Row>
                    <a style={{textDecoration: 'none'}} href="https://www.facebook.com/ahnegao/">
                    <CopBox>Facebook</CopBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://twitter.com/AhNegao">
                    <CopBox>Twitter</CopBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://www.instagram.com/ahnegao/">
                    <CopBox>Instagram</CopBox></a>
                    <Separator/>
                    <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/contato">
                    <CopBox>Contato</CopBox></a>
                </Row>
                <Separator x='10'/>
            </Row>     
        </BottomBarBox>
    );
}
export default BottomBar;