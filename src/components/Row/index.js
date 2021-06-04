import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column || 'Row'};
  //align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
`;

export default Row;