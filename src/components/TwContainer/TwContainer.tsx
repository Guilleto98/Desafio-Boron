import {
    Flex,
    Image
} from "@chakra-ui/react"
import img from '../../assets/images/newsImg/image-5.png'
import Twitter from "../Twitter/Twitter"

const TwContainer = ()=>{
    return(
        <Flex
        flexDirection={{base:'column-reverse', lg:'row'}}>
        <Image
        w='full'
        src={img}
        />
        <Twitter/>
        </Flex>
    )
}

export default TwContainer