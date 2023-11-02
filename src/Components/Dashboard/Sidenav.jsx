import {
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { BiHome } from "react-icons/bi";
  import { FiBell } from "react-icons/fi";
  import { AiOutlineHeart } from "react-icons/ai";
  import { MdOutlineMailOutline } from "react-icons/md";
  import { BsWalletFill } from "react-icons/bs";
  import { CgProfile } from "react-icons/cg";
  import { BiUser } from "react-icons/bi";
  import { FiSettings } from "react-icons/fi";
  import {RiLogoutCircleLine} from "react-icons/ri"
  
  const Sidenav = () => {
    const navlinks = [   
      {
        icon: BiHome,
        text: "Home",
        link: "/",
      },
      {
        icon: FiBell,
        text: "Notification",
        link: "/",
      },
      {
        icon: AiOutlineHeart,
        text: "Shop",
        link: "/",
      },
      {
        icon: MdOutlineMailOutline,
        text: "Conversation",
        link: "/",
      },
      {
        icon: BsWalletFill,
        text: "Wallet",
        link: "/",
      },
      {
        icon: CgProfile,
        text: "Subscription",
        link: "/",
      },
      {
        icon: BiUser,
        text: "My Profile",
        link: "/",
      },
      {
        icon: FiSettings,
        text: "Setting",
        link: "/",
      },
    ];
  
    const support = [
      {
        text: "Log out",
        icon: RiLogoutCircleLine,
      },
    ];
  
    return (
      <Stack
        justify={"space-between"}
        width={'16rem'}
        height={'100vh'}
        background="#FFFFFF"
        color={"white"}
        m={'5'}
        mt={'1'}
        rounded={'lg'}
      >
        <Box>
          <Heading
            as="h1"
            fontSize={34}
            display={"flex"}
            gap={"2"}
            margin={4}
            marginLeft={6}
            marginTop={6}
            marginBottom={5}
            color={'#101010'}
          >
            <img src="./Images/Logo.png" alt="" />
            LOGO
          </Heading>
          <Box mx="7">
            {navlinks.map((nav) => (
              <HStack
                key={nav.text}
                fontSize={16}
                fontWeight={'semibold'}
                py={2}
                px={2}
                borderRadius={"6px"}
                _hover={{
                  color: "black",
                }}
                color="#8D8D8D"
              >
                <Icon as={nav.icon} />
                <Text>{nav.text}</Text>
              </HStack>
            ))}
          </Box>
        </Box>
  
        <Box ml="4" my={"6"} pr={4}>
          {support.map((nav) => (
            <HStack
              fontSize={14}
              py={2}
              px={2}
              borderRadius={"6px"}
              _hover={{
                color: "#158774",
              }}
              color="#8D8D8D"
            >
              <Text>
                <img src="./Images/youngman.png" alt="" />
              </Text>
              <Icon color={"#88C2BB"} as={nav.icon} />
              <Text mr={4} alignItems={"center"} color={'#88C2BB'}>   
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Stack>
    );
  };
  
  export default Sidenav;