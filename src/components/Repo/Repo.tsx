import { 
    Heading,
    Link,
    VStack,
    Spacer,
    Box,
    Flex,
    Divider
} from "@chakra-ui/react";

import ArrowIcon from "./ArrowIcon";



const Repo = () => {


    return(
        <Flex
        w='full'
        flex='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        paddingTop={{base:'160px', lg:'60px'}}
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
                <Box
                    w={{base:'318px', lg:'206px'}}
                    fontFamily="OpenSans-semi"
                >
                        Repositorio institucional
                        de Boron Studio
                </Box>
            </Flex>
            <Flex
            w='full'
            flexDirection='column'
            >
                <Box
                    paddingRight={{base:'30px', lg:'120px'}}
                    paddingLeft={{base:'30px', lg:'120px'}}
                >
                    <Divider 
                        border='1px solid black'      
                    />
                </Box>
                <Flex
                w='full'
                justifyContent='space-between'
                alignItems='center'
                paddingTop={{base:'31px', lg:'40px'}}
                paddingBottom={{base:'31px', lg:'40px'}}
                paddingRight={{base:'40px', lg:'160px'}}
                paddingLeft={{base:'40px', lg:'160px'}}>
                    <Heading
                    as='h2' 
                    fontSize={{base:'23px', lg:'42px'}}>
                        Autor
                    </Heading>
                    <ArrowIcon/>
                </Flex>
            </Flex>
            <Flex
            w='full'
            flexDirection='column'
            >
                <Box
                    paddingRight={{base:'30px', lg:'120px'}}
                    paddingLeft={{base:'30px', lg:'120px'}}
                >
                    <Divider 
                        border='1px solid black'      
                    />
                </Box>
                <Flex
                w='full'
                justifyContent='space-between'
                alignItems='center'
                paddingTop={{base:'31px', lg:'40px'}}
                paddingBottom={{base:'31px', lg:'40px'}}
                paddingRight={{base:'40px', lg:'160px'}}
                paddingLeft={{base:'40px', lg:'160px'}}>
                    <Heading
                    as='h2' 
                    fontSize={{base:'23px', lg:'42px'}}>
                        Título
                    </Heading>
                    <ArrowIcon/>
                </Flex>
            </Flex>
            <Flex
            w='full'
            flexDirection='column'
            >
                <Box
                    paddingRight={{base:'30px', lg:'120px'}}
                    paddingLeft={{base:'30px', lg:'120px'}}
                >
                    <Divider 
                        border='1px solid black'      
                    />
                </Box>
                <Flex
                w='full'
                justifyContent='space-between'
                alignItems='center'
                paddingTop={{base:'31px', lg:'40px'}}
                paddingBottom={{base:'31px', lg:'40px'}}
                paddingRight={{base:'40px', lg:'160px'}}
                paddingLeft={{base:'40px', lg:'160px'}}>
                    <Heading
                    as='h2' 
                    fontSize={{base:'23px', lg:'42px'}}>
                        Línea de Navegación
                    </Heading>
                    <ArrowIcon/>
                </Flex>
            </Flex>
            <Flex
            w='full'
            flexDirection='column'
            >
                <Box
                    paddingRight={{base:'30px', lg:'120px'}}
                    paddingLeft={{base:'30px', lg:'120px'}}
                >
                    <Divider 
                        border='1px solid black'      
                    />
                </Box>
                <Flex
                w='full'
                justifyContent='space-between'
                alignItems='center'
                paddingTop={{base:'31px', lg:'40px'}}
                paddingBottom={{base:'31px', lg:'40px'}}
                paddingRight={{base:'40px', lg:'160px'}}
                paddingLeft={{base:'40px', lg:'160px'}}>
                    <Heading
                    as='h2' 
                    fontSize={{base:'23px', lg:'42px'}}>
                        Descripciones
                    </Heading>
                    <ArrowIcon/>
                </Flex>
                <Box
                    paddingRight={{base:'30px', lg:'120px'}}
                    paddingLeft={{base:'30px', lg:'120px'}}
                >
                    <Divider 
                        border='1px solid black'      
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Repo