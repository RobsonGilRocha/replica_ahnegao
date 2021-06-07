import {
    PotsBoxBox, 
    PotsTitle, 
    PotsDate,
    Potsline,
    HtmlPots,
    ReadMore
} from './styles'
import { Row, Separator} from '../index'
import dayjs from 'dayjs'

function PotsBox({item}) {

    console.log(item)
    return(
        <PotsBoxBox>
           <PotsTitle href={item.link} style={{textDecoration: 'none'}}>{item.title.rendered}</PotsTitle>
           <PotsDate>{dayjs(item.date).format('DD/MM/YYYY')}</PotsDate>
           <Potsline/>
           <HtmlPots dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
           <Potsline/>
           <Row>
               <Separator/>
               <ReadMore href={item.link} style={{textDecoration: 'none'}}>Leia mais »</ReadMore>
               <Separator/>
           </Row>
           
           <div>potsboxbottombox</div>
        </PotsBoxBox>
    );
}

export default PotsBox;