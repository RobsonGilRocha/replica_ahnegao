import {TopControlBox, CopBox  } from './styles'
import {Row, Separator} from './../index'
function TopControl() {
    return(
            <TopControlBox>
                <Separator y='59'/>
                <Row  justifyContent='justifyContent' column='column'>
                    <Row justifyContent='justifyContent'>
                        <Separator x='170'/>
                        <a style={{textDecoration: 'none'}} href="https://www.facebook.com/ahnegao/">
                            <CopBox>Envie seu meme</CopBox>
                        </a>
                        <Separator x='45'/>
                        <a style={{textDecoration: 'none'}} href="https://twitter.com/AhNegao">
                        <CopBox>Anunciar</CopBox></a>
                        <Separator x='44'/>
                        <a style={{textDecoration: 'none'}} href="https://www.instagram.com/ahnegao/">
                        <CopBox>Sobre</CopBox></a>
                        <Separator x='44'/>
                        <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/contato">
                        <CopBox>Destaques</CopBox></a>
                        <Separator x='150'/>
                    </Row> 
                </Row>
                
            </TopControlBox>
    );
}

export default TopControl;