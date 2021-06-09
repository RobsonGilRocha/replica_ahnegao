import {
    PotsBoxBox, 
    PotsTitle, 
    PotsDate,
    Potsline,
    HtmlPots,
    ReadMore,
    PotsOverBox
} from './styles'
import { Row, Separator} from '../index'
import dayjs from 'dayjs'

function PotsBox({item}) {

    console.log(item)
    return(
        <PotsBoxBox>
            <PotsOverBox >
                <PotsTitle href={item.link} style={{textDecoration: 'none'}}>{item.title.rendered}</PotsTitle>
                <PotsDate>{dayjs(item.date).format('DD/MM/YYYY')}</PotsDate>
                <Potsline/>
                <HtmlPots dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
                
            </PotsOverBox>
           <Row>
               <Separator/>
               <ReadMore href={item.link} style={{textDecoration: 'none'}}>Leia mais »</ReadMore>
               <Separator/>
           </Row>
           <Potsline/>
           <div>potsboxbottombox</div>
        </PotsBoxBox>
    );
}

export default PotsBox;