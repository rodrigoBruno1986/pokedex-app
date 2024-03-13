import {LoaderContainer} from "./Loader.styles"
interface Props {
  color: string;
  size?: number;
}

export const Loader = ({ size, color }: Props) => {
  return <LoaderContainer size={size} color={color} />;
};
