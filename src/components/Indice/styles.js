import styled from 'styled-components';

export const IndiceBox = styled.div`
  height: 60px;
  width: 880px;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 47px;
  color: #ffffff;

  
  background-color: #58155A;
  
  
`;

export const IndiceNavegtorBox = styled.div`
  height: 47px;
  width: 220px;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 47px;
  color: #ffffff;
  border-color: #8b1d8f;
  text-align: center;
  border-style: solid;
  
  &:hover {
    cursor: pointer;
    background-color: #8b1d8f;
  }
`;

export const arrowBox = styled.span`
  background-size: contain;
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 0;
  transform: rotate(360deg);
 // border-style: solid;
  background:#fff url(https://www.ahnegao.com.br/wp-content/plugins/wpnextpreviouslink/assets/images/r_arrow_green.png
) round no-repeat;
  background-color: #520D5B;
`;



