import {TopBarBox} from './styles'
import {Logo, Row, TopControl, Separator } from '../index'

function TopBar() {
    return(
        <>
            <TopBarBox>
                <Row >
                <Logo/>
                <TopControl/>
                </Row>     
            </TopBarBox>
            <Separator x='50'/>
        </>
    );
}

export default TopBar;