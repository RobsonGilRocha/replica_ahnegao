import {
    PotsBoxBox, 
    PotsTitle, 
    PotsDate,
    Potsline,
    HtmlPots,
    ReadMore,
    PotsOverBox,
    ReadMorebox,
    Potsboxbottombox
} from './styles'
import { Row, Separator} from '../index'
import dayjs from 'dayjs'

function PotsBox({item}) {

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
               <ReadMorebox>
                   <ReadMore href={item.link} style={{textDecoration: 'none'}}>Leia mais »</ReadMore>
               </ReadMorebox>
               
               <Separator/>
           </Row>
           <Potsline/>
           <Potsboxbottombox>
               <Row>
                   <Row column="column">
                       <div>TAG</div>
                       <div>imgauthor</div>
                       <div>author</div>
                    </Row>
                    <Row column="column">
                    <div>comentarios</div>
                    </Row>
                </Row>
               </Potsboxbottombox>
        </PotsBoxBox>
    );
}

export default PotsBox;