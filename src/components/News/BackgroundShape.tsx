import { chakra } from "@chakra-ui/react";

const Svg = chakra("svg");

interface Props {
  fill: string;
}
const BackgroundShape = ({ fill = "#40B5E0", ...rest }: Props) => {
  return (
    <Svg
      zIndex="-1"
      position="absolute"
      bottom="0"
      left="0"
      width="full"
      height="full"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M-2 60L365 0V302H-2V60Z" fill={fill} />
    </Svg>
  );
};

export default BackgroundShape;
