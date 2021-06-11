import styled from 'styled-components'
import {useEffect, useState } from 'react'

const NavTopBox = styled.div`
    
    height: 2.1em;
    height: 2.1em;
    line-height: 2.1;
    transform: rotate(180deg);
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
    let  corDeFundo = ""

    console.log(document.body.style.backgroundColor)
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
            {window.pageYOffset >= 300 ?<NavTopBox onClick={()=>topOn()}>Certo</NavTopBox>
            : 
            <NavTopBox onClick={()=>topOn()}>ERROU</NavTopBox>}
        </>
    );
}
export default NavTop;