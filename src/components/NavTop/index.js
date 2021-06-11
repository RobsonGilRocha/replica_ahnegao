import styled from 'styled-components'

const NavTopBox = styled.div`
    height: 100px;
    width: 100px;
    position: fixed;
    z-index:90;
    background-color: red;
    margin-bottom: 30px;
    margin-left: 30px;
`;



function NavTop() {
    function topOn() {
        console.log(window.pageYOffset); 
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
 let condição = true
  //  
    return(
        <>
            {condição ?<NavTopBox onClick={()=>topOn()}/>
            : 
            <div/>}
        </>
    );
}
export default NavTop;