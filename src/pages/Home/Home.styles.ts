import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    padding: 1rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .header__inner {
    width: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  span {
    color: var(--color-text);
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }

  svg {
    width: 24px;
  }
`;