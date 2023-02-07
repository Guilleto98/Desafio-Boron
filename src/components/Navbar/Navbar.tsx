import {
    Img,
    Button,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react"

import { MenuIconOne, MenuIconTwo } from "./MenuIcon";
import logo from "../../assets/images/brand/blackLogo.png";


const Navbar = ()=>{
    const isInMobile = useBreakpointValue({ base: true, lg: false });

    return(
        <>
        {isInMobile && <Flex
            w='100%'
            >
                <Flex
                w='full'
                paddingTop='32px'
                paddingLeft='22px'
                paddingRight='106px'>
                    <Img
                        src={logo}
                        style={{
                            height: "21px",
                            width: "134px",
                        }}
                        alt=''
                    />
                </Flex>
    
                <Flex
                w='100px'
                paddingRight='13px'
                marginTop='20px'>
                    <Button
                    bg='#000000'
                    w='100px'
                    h='40px'
                    borderRadius='60px'
                    color='#FFFFFF'
                    fontSize='14px'
                    >
                
                    Menu
                
                    <Flex
                    flexDir='column'
                    paddingLeft='5px'
                    justifyContent='space-between'
                    height='10px'>
                        <MenuIconOne/>
                        <MenuIconTwo/>
                    </Flex>
                </Button>
                </Flex>
            </Flex>}
        </>
    )
}

export default Navbar