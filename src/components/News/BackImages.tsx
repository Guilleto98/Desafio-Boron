import { Image } from "@chakra-ui/react";
import BackgroundShape from "./BackgroundShape";

interface Props {
  photo: string;
  backgroundFill: string;
}
const BackImages = (props: Props) => {
  return (
    <>
      <Image
        src={props.photo}
        zIndex="-2"
        position="absolute"
        top="0"
        left="0"
        h="full"
        w="full"
        objectFit={"cover"}
      />
      <BackgroundShape fill={props.backgroundFill} />
    </>
  );
};

export default BackImages;
