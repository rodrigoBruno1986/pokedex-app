import {StyledTitle} from "./Title.styles"

interface Props {
  content: string;
  backgroundSelected: string;
}

export const Title = ({ content, backgroundSelected }: Props) => {
  return (
    <StyledTitle backgroundSelected={backgroundSelected}>
      {content}
    </StyledTitle>
  );
};
