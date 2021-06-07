import {TopControlBox, ConBox  } from './styles'
import {Row, Separator} from './../index'
function TopControl() {
    return(
            <TopControlBox>
                <Separator y='59'/>
                <Row  justifyContent='justifyContent' column='column'>
                    <Row justifyContent='justifyContent'>
                        <Separator x='170'/>
                        <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/enviar-dica">
                            <ConBox>Envie seu meme</ConBox>
                        </a>
                        <Separator x='30'/>
                        <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/anunciar">
                        <ConBox>Anunciar</ConBox></a>
                        <Separator x='44'/>
                        <a style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/sobre">
                        <ConBox>Sobre</ConBox></a>
                        <Separator x='44'/>
                        <ConBox style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/#">
                            Destaques
                            </ConBox>
                        <Separator x='150'/>
                    </Row> 
                </Row>
                
            </TopControlBox>
    );
}

export default TopControl;