import styled from 'styled-components';

export const StatsContainer = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    color: #666666;
    font-size: 20px;
    color: #000;
  }
`;