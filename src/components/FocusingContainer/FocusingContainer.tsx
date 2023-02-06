import {
    Heading,
    Image,
    Flex,
    Text,
} from '@chakra-ui/react';

import img from '../../assets/images/newsImg/image-6.png'
const FocusingContainer = ()=>{
    return(
        <Flex
        bg='#77D7DB'
        flexDirection={{base:'column-reverse', lg:'row'}}
        >
            <Image
            w='full'
            src={img}
            />
            <Flex
            flexDirection='column'
            w='full'
            >
                <Heading 
                    as='h4'
                    fontFamily='OpenSans-semi'
                    textAlign='start'
                    paddingTop={{base:'49px', lg:'104px'}}
                    paddingLeft={{base:'30', lg:'100px'}}
                    paddingRight={{base:'168px', lg:'418px'}}
                    marginBottom={{base:'154px', lg:'324px'}}
                    fontSize={{ base: "14px", lg: "16px" }}
                    >
                    NUESTRO ENFOQUE
                </Heading>  
                <Text
                fontSize='24px'
                fontFamily={'OpenSans-semi'}
                textAlign='start'
                paddingLeft={{base:'30', lg:'100px'}}
                paddingRight={{base:'30px', lg:'89px'}}
                marginBottom={{base:'48px', lg:'108px'}}
                >
                Está orientada a problematizar y aportar ideas y soluciones a la implementación actual
                y futura de Boron Studio y de otros actores nacionales e internacionales.
                </Text>
            </Flex>
        </Flex>
    )
}

export default FocusingContainer;