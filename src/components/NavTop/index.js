import styled from 'styled-components'
import {useEffect, useState } from 'react'

const NavTopBox = styled.div`
    
    height: 2.1em;
    width: 2.1em;
    line-height: 2.1;
    transform: rotate(360deg);
    color: #fff;
    border-radius: 2px;
    background-color: #8b1d8f;
    text-align: center;
    cursor: pointer;
    z-index:90;
    background-color: #8b1d8f;
    border-color: #8b1d8f;
    right: 30px;
    bottom: 30px;
    position: fixed;
`;

function NavTop() {
    const [toggle, setToggle] = useState(false)
    

    console.log(window.pageYOffset)
    function topOn() {
        
       //corDeFundo = String(document.body.backgroundColor);
       // console.log(window.pageYOffset)
  
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
        
    
    

 //let condição = true
  //  
    return(
        <>
            {window.pageYOffset == 300 || window.pageYOffset < 300 ?<NavTopBox onClick={()=>topOn()}>^</NavTopBox>
            : 
            <NavTopBox onClick={()=>topOn()}>/^\</NavTopBox>}
        </>
    );
}
export default NavTop;