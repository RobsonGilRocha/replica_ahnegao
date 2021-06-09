import {TopControlBox, ConBox  } from './styles'
import {Row, Separator} from './../index'
function TopControl() {
    return(
        <TopControlBox>
            <Separator y='59'/>
            <Row  justifyContent='justifyContent' column='column'>
                <Row justifyContent='justifyContent'>
                    <Separator x='170'/>
                    <ConBox style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/enviar-dica">
                    Envie seu meme
                    </ConBox>
                    <Separator x='30'/>
                    <ConBox style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/anunciar">
                    Anunciar
                    </ConBox>
                    <Separator x='44'/>
                    <ConBox style={{textDecoration: 'none'}} href="https://www.ahnegao.com.br/sobre">
                    Sobre
                    </ConBox>
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