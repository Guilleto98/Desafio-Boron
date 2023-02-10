import { Flex, VStack, Link, Button, Center, Text } from '@chakra-ui/react';
import RightArrow from '../Footer/RigthArrow';
import TwitterIcon from '../Footer/TwitterIcon';
import YoutubeIcon from '../Footer/YoutubeIcon';
import SearchIconWhite from './SearchIconWhite';


const MenuToggle = ()=>{
    return(
        <Flex
        w='50%'
        >
            <Flex
                position='fixed'
                w='50%'
                h='100%'
                bg='#000000'
                zIndex='3'
                color='#FFFFFF'>
                <VStack
                mt={{ base: "48px", lg: "0" }}
                color="#FFFFFF"
                paddingTop='114px'
                fontFamily="OpenSans-regular"
                textAlign="left"
                alignSelf="end"
                paddingLeft='110px'
                height="100%"
                w='full'
                >
                
                    <Link 
                    href='#' w="full"
                    paddingRight='33px'
                    fontSize='40px'
                    paddingBottom='38px'>
                    Acerca de
                    </Link>
                    <Link 
                    href='#' w="full"
                    paddingRight='33px'
                    fontSize='40px'
                    paddingBottom='38px'>
                    Proyectos
                    </Link>
                    <Link 
                    href='#' w="full"
                    paddingRight='33px'
                    fontSize='40px'
                    paddingBottom='38px'>
                    Repositorios
                    </Link>
                    <Link 
                    href='#' w="full"
                    paddingRight='33px'
                    fontSize='40px'
                    paddingBottom='38px'>
                    Novedades
                    </Link>
                    <Link 
                    href='#' w="full"
                    paddingRight='33px'
                    fontSize='40px'
                    paddingBottom='38px'>
                    Contacto
                    </Link>
                
                    <Flex
                    w='full'
                    >
                        <SearchIconWhite/>
                        <Flex
                        paddingLeft='405px'
                        >
                            <Link
                            fontSize='24px'>
                                EN /  
                            </Link>
                            <Link
                            fontSize='24px'>
                                ES
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex
                    paddingTop='58px'
                    marginBottom='86px'
                    w='full'
                        >
                        <Button
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
                            <Flex gap={{ base: "26px", lg: "42px" }}>
                                <YoutubeIcon />
                                <TwitterIcon color='#77D7DB'/>
                            </Flex>
                        </Flex>
                    </Flex>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default MenuToggle