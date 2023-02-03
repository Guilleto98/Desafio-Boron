import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import logo from "../../assets/images/brand/logo.png";
import FooterLinks from "./FooterLinks";
import RightArrow from "./RigthArrow";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";

const Footer = () => {
  const isInMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      bg="black"
      w="full"
      h={{ base: "686px", lg: "478px" }}
      pt={{ base: "62px", lg: "86px" }}
      px={{ base: "29px", lg: "137px" }}
      pb={{ base: "92px", lg: "99px" }}
      justifyContent={{ base: "inherit", lg: "space-between" }}
    >
      <Flex flexDir="column" justifyContent="space-between">
        <img
          src={logo}
          style={{
            height: "37px",
            width: "238px",
          }}
          alt=''
        />

        {isInMobile && <FooterLinks />}
        <Heading
          textAlign="left"
          w={{ base: "318px", lg: "357px" }}
          color="white"
          fontFamily="OpenSans-bold"
          fontSize="32px"
          mt={{ base: "57px", lg: "87px" }}
          mb={{ base: "25px", lg: "29px" }}
        >
          Enterate de las últimas novedades
        </Heading>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "inherit", lg: "center" }}
        >
          <Button
            px={{ base: "20px", lg: "29px" }}
            py="11px"
            bg="#77D7DB"
            _hover={{ bg: "#40B5E0" }}
            color="black"
            borderRadius="0"
            fontFamily="OpenSans-bold"
            fontSize="14px"
            rightIcon={
              <Center ml={{base:"6px", lg:"26px"}}>
                <RightArrow />
              </Center>
            }
            w={{ base: "318px", lg: "400px" }}
          >
            SUSCRIBITE A NUESTRO NEWSLETER
          </Button>

          <Flex ml={{ base: "0", lg: "57px" }} mt={{ base: "41px", lg: "0" }}>
            <Text
              fontFamily="OpenSans-bold"
              fontSize="14px"
              color="white"
              mr={{ base: "51px", lg: "80px" }}
            >
              info@boronstudio.com
            </Text>
            <Flex gap={{ base: "26px", lg: "42px" }}>
              <YoutubeIcon />
              <TwitterIcon color='#77D7DB'/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {!isInMobile && <FooterLinks />}
    </Flex>
  );
};

export default Footer;
