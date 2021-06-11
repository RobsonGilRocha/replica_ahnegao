import styled from 'styled-components';

const Align = styled.span`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: ${({ column }) => column || 'Row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  
`;

export default Align;