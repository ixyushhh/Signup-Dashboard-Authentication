import {
    Box,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react";


const Topleftsection = () => {

    return (
        <Stack>
            <Stack justifyContent={'center'}
                textAlign={'center'}
                width={'18rem'}
                background="#88C2BB"
                color={"white"}
                p={'17px'} ml={'5'} mt={'1'} mb={'6'}
                rounded={"lg"}>
                <Text height={'34px'} mt={'2'} fontSize={'16px'} fontWeight={'bold'}>Become a Seller</Text>
            </Stack>

            <HStack ml={'5'} fontWeight={'semibold'}>
                <Text>Artist</Text>
                <Text textColor={'#8D8D8D'}>Photographer</Text>
            </HStack>

            <Stack justifyContent={'center'}
                textAlign={'center'}
                width={'17rem'}
                background="transparent"
                color={"white"}
                ml={'5'} h={"10%"}
                rounded={"lg"}
                >

                <Box h={'8rem'} backgroundImage={'/Images/painting1.jpg'} backgroundSize={'cover'} rounded={'lg'} display={'flex'} gap={2} mb={'3'} >
                    <div className="mt-16 ml-5">
                        <img src="/Images/person1.jpg" className="rounded-xl" />
                    </div>
                    <div className="mt-16 text-left" >
                        <Text fontSize={'16px'} fontWeight={'bold'}>Thomas Edward</Text>
                        <Text fontSize={'12px'}>@thewildwithyou</Text>
                    </div>
                </Box>

                <Box h={'8rem'} backgroundImage={'/Images/painting2.jpg'} backgroundSize={'cover'} rounded={'lg'} display={'flex'} gap={2} mb={'3'} >
                    <div className="mt-16 ml-5">
                        <img src="/Images/person2.jpg" className="rounded-xl" />
                    </div>
                    <div className="mt-16 text-left" >
                        <Text fontSize={'16px'} fontWeight={'bold'}>Chris Doe</Text>
                        <Text fontSize={'12px'}>@thewildwithyou</Text>
                    </div>
                </Box>

                <Box h={'8rem'} backgroundImage={'/Images/painting3.jpg'} backgroundSize={'cover'} rounded={'lg'} display={'flex'} gap={2} mb={'3'} >
                    <div className="mt-16 ml-5">
                        <img src="/Images/person3.jpg" className="rounded-xl" />
                    </div>
                    <div className="mt-16 text-left" >
                        <Text fontSize={'16px'} fontWeight={'bold'}>Emilie Jones</Text>
                        <Text fontSize={'12px'}>@thewildwithyou</Text>
                    </div>
                </Box>

                <Box h={'8rem'} backgroundImage={'/Images/painting4.jpg'} backgroundSize={'cover'} rounded={'lg'} display={'flex'} gap={2} mb={'3'} >
                    <div className="mt-16 ml-5">
                        <img src="/Images/person4.jpg" className="rounded-xl" />
                    </div>
                    <div className="mt-16 text-left" >
                        <Text fontSize={'16px'} fontWeight={'bold'}>Jessica Williams</Text>
                        <Text fontSize={'12px'}>@thewildwithyou</Text>
                    </div>
                </Box>

                <Box h={'8rem'} backgroundImage={'/Images/painting5.jpg'} backgroundSize={'cover'} rounded={'lg'} display={'flex'} gap={2} mb={'3'} >
                    <div className="mt-16 ml-5">
                        <img src="/Images/person1.jpg" className="rounded-xl" />
                    </div>
                    <div className="mt-16 text-left" >
                        <Text fontSize={'16px'} fontWeight={'bold'}>Thomas Edward</Text>
                        <Text fontSize={'12px'}>@thewildwithyou</Text>
                    </div>
                </Box>
            </Stack>

        </Stack>

    )
}

export default Topleftsection