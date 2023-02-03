import { 
    Heading,
    Link,
    VStack,
    useBreakpointValue,
    Spacer,
    Box,
    Flex
} from "@chakra-ui/react";

import ArrowIcon from "./ArrowIcon";



const Repo = () => {

    const isInMobile = useBreakpointValue({ base: true, lg: false });

    return(
        <Flex
        w='full'
        flex='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        >
            <Flex
            w={{base:'318px', lg:'1200px'}}
            flexDirection={{base:'column', lg:'row'}}
            marginBottom={{base:'50px', lg:'70px'}}
            >
                <Box 
                p='4' 
                w={{base:'280px', lg:'460px'}}
                >
                    <Heading
                    fontSize={{base:'42px', lg: '72px'}}
                    fontFamily="OpenSans-bold">
                        Repositorio
                    </Heading>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Box
                    w={{base:'318px', lg:'206px'}}
                    fontFamily="OpenSans-semi">
                        Repositorio institucional
                        de Boron Studio
                    </Box>
                </Box>
            </Flex>
            <Flex
            alignItems='center'
            w={{base:'273px', lg:'1084px'}}
            justifyContent='space-between'
            borderTop='1px solid black'
            paddingTop={{base:'31px', lg:'40px'}}
            marginBottom={{base:'31px', lg:'40px'}}
            >
                <Heading
                as='h2' 
                fontSize={{base:'23px', lg:'42px'}}>
                    Autor
                </Heading>
                <ArrowIcon/>
            </Flex>
            <Flex
            alignItems='center'
            w={{base:'273px', lg:'1084px'}}
            justifyContent='space-between'
            borderTop='1px solid black'
            paddingTop={{base:'31px', lg:'40px'}}
            marginBottom={{base:'31px', lg:'40px'}}
            >
                <Heading
                as='h2' 
                fontSize={{base:'23px', lg:'42px'}}>
                    Título
                </Heading>
                <ArrowIcon/>
            </Flex>
            <Flex
            alignItems='center'
            w={{base:'273px', lg:'1084px'}}
            justifyContent='space-between'
            borderTop='1px solid black'
            paddingTop={{base:'31px', lg:'40px'}}
            marginBottom={{base:'31px', lg:'40px'}}
            >
                <Heading
                as='h2' 
                fontSize={{base:'23px', lg:'42px'}}>
                    Línea de Navegación
                </Heading>
                <ArrowIcon/>
            </Flex>
            <Flex
            alignItems='center'
            w={{base:'273px', lg:'1084px'}}
            justifyContent='space-between'
            borderTop='1px solid black'
            borderBottom='1px solid black'
            paddingTop={{base:'31px', lg:'40px'}}
            paddingBottom={{base:'31px', lg:'40px'}}
            >
                <Heading
                as='h2' 
                fontSize={{base:'23px', lg:'42px'}}>
                    Descripciones
                </Heading>
                <ArrowIcon/>
            </Flex>
        </Flex>
    )
}

export default Repo