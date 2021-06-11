import React,{useState, useEffect} from 'react';
import {  TopBar, AllPots,BottomBar,Separator, Align, NavTop} from '../../components'

function Homepage() {

    
  return (
    <>
    
    <TopBar/>
    <Separator y='150'x='150'/>
    <Align column='column'>
    <AllPots/>
    </Align>
    <Align color='#34033B'>
     <BottomBar/>
    </Align>
    <Separator y='25' />
    <NavTop/> 
  </>
  );
}

export default Homepage;