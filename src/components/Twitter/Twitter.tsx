import {
    Flex,
    Box,
    Heading,
} from "@chakra-ui/react";
import TwitterIcon from "../Footer/TwitterIcon";

const Twitter = ()=>{

    return(
        <Flex>
            <Box
            bg='red'>
                <Heading 
                    as='h4' 
                    fontSize={{ base: "14px", lg: "16px" }}>
                    SEGUINOS EN TWITTER
                </Heading>
                <TwitterIcon color='white'/>
            </Box>
        </Flex>
    )
}

export default Twitter;