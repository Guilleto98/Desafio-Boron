import { Link, HStack,Flex } from "@chakra-ui/react";
import { links } from "./links";
import SearchIcon from "./SearchIcon";


const NavbarLinks = () => {

  
  return (
    <HStack
      mt={{ base: "48px", lg: "0" }}
      color="#000000"
      fontSize="18px"
      fontFamily="OpenSans-regular"
      textAlign="left"
      alignSelf="end"
      height="100%"
      w={{ base: "full", lg: "auto" }}
    >
      {links.map(({ label, link }) => (
        <Link 
        href={link} w="full"
        paddingRight='33px'>
          {label}
        </Link>
      ))}
      <Flex
                marginTop='48px'
                paddingRight='50px'>
                    <SearchIcon/>
                </Flex>
    </HStack>
  );
};

export default NavbarLinks;