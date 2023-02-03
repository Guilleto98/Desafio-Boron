import { Link, VStack } from "@chakra-ui/react";
import { links } from "./links";

const FooterLinks = () => {

  
  return (
    <VStack
      mt={{ base: "48px", lg: "0" }}
      color="white"
      fontSize="16px"
      fontFamily="OpenSans-semi"
      textAlign="left"
      alignSelf="end"
      w={{ base: "full", lg: "auto" }}
    >
      {links.map(({ label, link }) => (
        <Link href={link} w="full">
          {label}
        </Link>
      ))}
    </VStack>
  );
};

export default FooterLinks;
