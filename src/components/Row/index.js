import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column || 'Row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
`;

export default Row;