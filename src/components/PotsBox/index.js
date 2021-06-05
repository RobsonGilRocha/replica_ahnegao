import {
    PotsBoxBox, 
    PotsTitle, 
    PotsDate,
    Potsline,
    HtmlPots
} from './styles'
import dayjs from 'dayjs'

function PotsBox({item}) {

    console.log(item)
    return(
        <PotsBoxBox>
           <PotsTitle>{item.title.rendered}</PotsTitle>
           <PotsDate>{dayjs(item.date).format('DD/MM/YYYY')}</PotsDate>
           <Potsline/>
           <HtmlPots dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
           <Potsline/>
           <div>potsboxbottombox</div>
        </PotsBoxBox>
    );
}

export default PotsBox;