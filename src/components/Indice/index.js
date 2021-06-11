///import Row from '../Row'
import Row from '../Row';
import Separator from '../Separator';
import {IndiceBox,IndiceNavegtorBox } from './styles'

function Indice({navigate, page}) {


    return(
        <IndiceBox>
                <Row> 
                        {page > 1 ?<IndiceNavegtorBox onClick={()=>navigate(-1)}>Anterior página</IndiceNavegtorBox>
                        : 
                        <Separator/>}
                        <IndiceNavegtorBox onClick={()=>navigate(1)}>Próxima página →</IndiceNavegtorBox>
                </Row>
        </IndiceBox>
    );
}
export default Indice;