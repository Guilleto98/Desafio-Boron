import { Flex, Image, } from '@chakra-ui/react';
    
import img from '../../assets/images/newsImg/image-8.png'


const Slide = ()=>{
    return(
        <Flex
        >
            <Image
            w='full'
            src={img}/>
        </Flex>
    )
}

export default Slide;