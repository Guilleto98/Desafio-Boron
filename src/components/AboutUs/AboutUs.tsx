import { Flex, Text } from '@chakra-ui/react';

const AboutUs = ()=>{
    return(
        <Flex
        bg='#FF5E43'
        px={{base:'30', lg:'121'}}
        py={{base:'36px', lg:'103px'}}>
            <Text
            fontFamily='OpenSans-regular'
            textAlign='start'
            fontSize={{base:'24px', lg:'64px'}}>
            Somos una organización autónoma que busca resolver desafíos
            relacionados con el aprendizaje y la mediación de las tecnologías,
            a través de metodologías innovadoras y un abordaje práctico, social y participativo.
            </Text>
        </Flex>
    )
}

export default AboutUs;