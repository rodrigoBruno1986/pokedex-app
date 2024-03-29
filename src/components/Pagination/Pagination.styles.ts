import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  font-weight: bold;

  button {
    padding: 0.6rem;
    background: #212121;
    border: none;
    cursor: pointer;
    color: #f7f7f7;
    border-radius: 0.5rem;
    font-size: 16px;
  }

  button:hover {
    transition-duration: 0.3s;
    transform: scale(1.1);
  }

  button[disabled] {
    cursor: no-drop;
    background: #666666;
  }
`;