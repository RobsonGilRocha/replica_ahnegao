import styled from 'styled-components';

const Separator = styled.div`
  height: ${({ y }) => y || 10}px;
  width: ${({ x }) => x || 10}px;
 // background-color: ${({color }) => color || "goldenrod"} ;
  //opacity: ${({ opacity }) => opacity || 1.0};
`;

export default Separator;