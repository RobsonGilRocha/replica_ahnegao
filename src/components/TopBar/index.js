import {TopBarBox, TopBarBoxCover} from './styles'
import {Logo, Row, TopControl, Separator } from '../index'

function TopBar() {
    return(
        <>
            <TopBarBoxCover>
                <TopBarBox>
                    <Row >
                        <Separator x='0'y='0'/>
                        <Logo/> 
                        <Row column='column'><Separator y='0' x='0'/>
                            <TopControl/>
                        </Row> 
                    </Row>
                    </TopBarBox>
            </TopBarBoxCover>        
        </>
    );
}

export default TopBar;