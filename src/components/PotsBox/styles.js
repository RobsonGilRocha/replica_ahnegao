import styled from 'styled-components';

export const PotsBoxBox = styled.div`
  
  max-width: 860px;
  
  background-color: #FFFFFF;
  color:#676767;
  padding: 10px 20px 20px 20px;
  margin-bottom: 10px;
`;
export const PotsOverBox = styled.p` //?
  width: 100%;
  padding: 0px;
  overflow: hidden; 
  max-height: 905px;
  min-height: 100px; 
  white-space:nowrap;
`;
export const PotsTitle = styled.a`
  font-family: "Carter One", display;
  font-size: 30px;
  color:#7e0e82;
  white-space: break-spaces;
`;

export const PotsDate = styled.div`
  font-weight:700;
`;

export const Potsline = styled.div`
  width: 100%;
  height: 1px;
  background-color:#BDB6B6;
  margin: 10px 0px;
`;
export const HtmlPots = styled.div`
 display: flex;
 flex-direction: column;
 width:  100%;
 text-align-last: center;
 
`;


export const ReadMore = styled.a`
font-family:"Carter One";
font-size: 42px;
font-weight:700;
color:#bf0fbc;
`;//Leia mais »

export const ReadMorebox = styled.div`
font-family:"Carter One";
font-size: 42px;
font-weight:700;
color:#bf0fbc;
`;//Leia mais » box

export const potsboxbottombox = styled.div`
font-size: 42px;
font-weight:${({ fontWeight }) => fontWeight || 700};
color:#bf0fbc;
`;//Leia mais »





