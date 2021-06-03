import {TopBarBox} from './styles'
import {Logo, Row, TopControl } from '../index'

function TopBar() {
    return(
        <TopBarBox>
            <Row>
               <Logo/>
               <TopControl/>
            </Row>     
        </TopBarBox>
    );
}

export default TopBar;