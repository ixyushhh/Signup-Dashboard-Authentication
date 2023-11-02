import {
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
  } from "@chakra-ui/react";
  import { MdSearch } from "react-icons/md";
  
  const Midtopnav = ({ onOpen }) => {
    return (
      <HStack p={'5'}  m={'5'} mt={'0'} h={"7%"} w={'152%'} bg={"#FFFFFF"}  rounded={'lg'} justifyContent={'space-between'}>
        <InputGroup w={"40%"}>
          <InputLeftElement pointerEvents="none">
            <MdSearch color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
        <Text display={"flex"} gap={'2'}>
            <img src="/Images/filter.jpg" alt="Filtering"/>
            <Text>Filter</Text>
        </Text>
      </HStack>
    );
  };
  
  export default Midtopnav;