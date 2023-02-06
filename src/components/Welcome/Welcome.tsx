import {
    Highlight,
    Text,
    Flex,
    Heading,
} from "@chakra-ui/react";

const Welcome = ()=>{
    return(
        <Flex
        flexDirection='column'
        px={{base:'13px',lg:'93px'}}
        py={{base:'', lg:''}}>
            <Heading
            fontFamily={'OpenSans-bold'}
            fontSize={{base:'55px', lg:'205px'}}
            paddingBottom={{base:'',lg:'51px'}}>
                Bienvenidos
            </Heading>
            <Text
            fontFamily={'OpenSans-bold'}
            fontSize={{base:'25px', lg:'64px'}}
            textAlign='start'>
            Desarrollamos y promovemos investigación, innovación 
            y divulgación sobre tecnología digital y aprendizaje, 
            en Uruguay y América Latina
            </Text> 
        </Flex>
    )
};

export default Welcome