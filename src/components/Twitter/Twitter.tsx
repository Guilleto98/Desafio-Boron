import {
    Button,
    Text,
    Flex,
    Box,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import TwitterIcon from "../Footer/TwitterIcon";
import RightArrow from '../Twitter/RightArrow';
import LeftArrow from "./LeftArrow";

const Twitter = ()=>{

    const isInMobile = useBreakpointValue({ base: true, lg: false });


    return(
        <Flex
            w='full'
            bg='#1DA1F2'
            paddingTop='104px'
            flexDirection='column'>
            <Flex
            alignItems='flex-start'
            flexDirection="column"
            px={{base: '30px', lg:'96px'}}
            >
                <Heading 
                    as='h4'
                    fontSize={{ base: "14px", lg: "16px" }}
                    marginBottom={{ base: "19px", lg: "54px" }}
                    >
                    SEGUINOS EN TWITTER
                </Heading>
                <Box
                marginBottom={{ base: "14px", lg: "35px" }}
                >
                    <TwitterIcon color='white'/>
                </Box>
                
                <Heading
                    fontSize={{base:'32px', lg:'42px'}}
                    fontFamily={"OpenSans-bold"}
                    color="#000000"
                >
                    Boronstudio
                </Heading>
                <Heading
                    fontFamily={'OpenSans-bold'}
                    color='#FFFFFF'
                    fontSize='14px'
                    marginBottom={{base:'5px', lg:'34px'}}
                >
                    @Boronstudio
                </Heading>
                
                <Heading
                    fontFamily={'OpenSans-semi'}
                    color='#000000'
                    fontSize='12px'
                    marginBottom={{lg:'3px'}}
                >
                    2hs
                </Heading>
                <Flex
                fontSize='xl'
                color='#FFFFFF'
                alignItems='flex-start'
                flexDirection="column"
                >
                    📌#OportunidadLaboral
                    <Text
                    color='#000000'

                    >   Llamado abierto para sumarse al equipo de
                    </Text>
                    @Boronstudio
                    <Text
                    color='#000000'
                    >
                        master digital.👩‍💻👨‍💻 Más información
                    </Text>
                    👉https://bit.ly/2OobIHS
                </Flex>

                {isInMobile &&
                <Flex
                    marginBottom='38px'
                    marginTop='33px'
                    w='full'
                    paddingLeft='134px'
                    paddingRight='131px'>
                    <Button 
                        colorScheme='blue'
                        size="xs"
                        borderRadius='50%'
                        padding='10px 10px'
                        marginRight='10px'
                        bg='#FFFFFF'>
                    </Button>
                    <Button 
                        colorScheme='blue'
                        size="xs"
                        borderRadius='50%'
                        padding='10px 10px'
                        marginRight='10px'
                        bg='#000000'>
                    </Button>
                    <Button 
                        colorScheme='blue'
                        size="xs"
                        borderRadius='50%'
                        padding='10px 10px'
                        marginRight='10px'
                        bg='#000000'>
                    </Button>
                </Flex>}

                {!isInMobile &&
                <Flex
                w="full"
                marginTop='63px'
                marginBottom='105px'
                justifyContent='space-between'>
                    <LeftArrow/>
                    <RightArrow/>  
                </Flex>}

            </Flex>
        </Flex>
    )
}

export default Twitter;