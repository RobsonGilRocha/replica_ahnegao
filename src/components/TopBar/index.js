import {TopBarBox} from './styles'
import {Logo, Row, TopControl, Separator } from '../index'

function TopBar() {
    return(
        <>
            <TopBarBox>
                <Row >
                    <Separator x='70'/> <Logo/> <TopControl/>
                </Row>     
            </TopBarBox>        
        </>
    );
}

export default TopBar;