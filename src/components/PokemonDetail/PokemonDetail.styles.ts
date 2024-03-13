import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  max-width: 650px;
  width: 95%;
  background-color: white;
  height: 65vh;
  bottom: 0;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: absolute;
    margin: 0 auto;
    margin-top: -200px;
    width: 275px;
    height: 275px;
    object-fit: contain;
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;