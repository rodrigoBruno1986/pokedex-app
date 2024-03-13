import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: number;
  color: string;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.span<LoaderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 3px solid transparent;
  border-bottom-color: white !important;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s linear infinite;
  align-self: center;
  margin: 2rem;
`;

