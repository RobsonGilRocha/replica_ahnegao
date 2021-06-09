import {TopBarBox} from './styles'
import {Logo, Row, TopControl, Separator } from '../index'

function TopBar() {
    return(
        <>
            <TopBarBox>
                <Row >
                    <Separator x='30'/> <Logo/> <TopControl/>
                </Row>     
            </TopBarBox>        
        </>
    );
}

export default TopBar;