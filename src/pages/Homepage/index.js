import React from 'react';
import {  TopBar, AllPots,BottomBar,Separator, Align, NavTop} from '../../components'

function Homepage() {
    
    
  return (
    <>
    <TopBar/>
    <Separator y='150'x='150'/>
    <Align column='column'>
    <AllPots/><NavTop/>
    </Align>
    <Align color='#34033B'>
     <BottomBar/> 
    </Align>
    <Separator y='25' />
    
  </>
  );
}

export default Homepage;