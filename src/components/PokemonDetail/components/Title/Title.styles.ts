import styled from 'styled-components';

interface StyledTitleProps {
    backgroundSelected: string;
  }
  

export const StyledTitle = styled.span<StyledTitleProps>`
  text-align: center;
  font-weight: bold;
  margin: 1.5rem 0;
  font-size: 20px;
  color: ${(props) => props.backgroundSelected};
`;