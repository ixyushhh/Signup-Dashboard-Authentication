import {
    Box,
    Stack,
    Text,
} from "@chakra-ui/react";


const Midsection = () => {

    return (
        <Stack>
            <Stack p={'5'} ml={'2'} m={'5'} h={"80%"} w={'95%'} bg={"#FFFFFF"} rounded={'lg'}>
                <Text display={"flex"} gap={'2'} mb={'4'}>
                    <img src="/Images/girl1.jpg" alt="profilepic" />
                    <div>
                        <Text>Lara Leones</Text>
                        <Text>@thewallart</Text>
                    </div>
                </Text>
                <Text fontSize={'14px'} mb={'4'}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="text-red-400">Read More</span>
                </Text>
                <div className="rounded-lg mb-4"><img className="rounded-lg" src="/Images/Wallart.jpg" /></div>
                <div className="flex gap-2 text-black font-bold h-5 w-5">
                    <img src="/Images/heart.jpg" />
                    <p>9.8k</p>
                    <img src="/Images/comment.jpg" />
                    <p>9.8k</p>
                    <img src="/Images/share.jpg" />
                    <p>9.8k</p>
                </div>
            </Stack>

            <Stack p={'5'} ml={'2'} m={'5'} h={"80%"} w={'95%'} bg={"#FFFFFF"} rounded={'lg'}>
                <Text display={"flex"} gap={'2'} mb={'4'}>
                    <img src="/Images/boy1.jpg" alt="profilepic" />
                    <div>
                        <Text>Lara Leones</Text>
                        <Text>@thewallart</Text>
                    </div>
                </Text>
                <Text fontSize={'14px'} mb={'4'}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="text-red-400">Read More</span>
                </Text>
                <div className="rounded-lg mb-4"><img className="rounded-lg" src="/Images/wallart2.jpg" /></div>
                <div className="flex gap-2 text-black font-bold h-5 w-5">
                    <img src="/Images/heart.jpg" />
                    <p>9.8k</p>
                    <img src="/Images/comment.jpg" />
                    <p>9.8k</p>
                    <img src="/Images/share.jpg" />
                    <p>9.8k</p>
                </div>
            </Stack>

            <Stack className="card-section" m={'5'} w={'95%'} rounded={'lg'} display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={4}>
                <Box w={'500px'}>
                    <Box>
                        <img className="h-32 w-56 rounded-lg mb-2" src="/Images/card2.jpg" />
                        <Text fontSize={'13px'} fontWeight={'bold'} mb={'3'}>Modern Wall Decor Framed Painting</Text>
                        <Box display={"flex"} gap={6} fontWeight={'bold'} w={'200px'}>
                            <Text>$199.99</Text>
                            <Text display={"flex"}>
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box w={'500px'}>
                    <Box>
                        <img className="h-32 w-56 rounded-lg mb-2" src="/Images/card1.jpg" />
                        <Text fontSize={'13px'} fontWeight={'bold'} mb={'3'}>Modern Wall Decor Framed Painting</Text>
                        <Box display={"flex"} gap={6} fontWeight={'bold'} w={'200px'}>
                            <Text>$199.99</Text>
                            <Text display={"flex"}>
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box w={'500px'}>
                    <Box>
                        <img className="h-32 w-56 rounded-lg mb-2" src="/Images/card3.jpg" />
                        <Text fontSize={'13px'} fontWeight={'bold'} mb={'3'}>Modern Wall Decor Framed Painting</Text>
                        <Box display={"flex"} gap={6} fontWeight={'bold'} w={'200px'}>
                            <Text>$199.99</Text>
                            <Text display={"flex"}>
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box w={'500px'}>
                    <Box>
                        <img className="h-32 w-56 rounded-lg mb-2" src="/Images/card4.jpg" />
                        <Text fontSize={'13px'} fontWeight={'bold'} mb={'3'}>Modern Wall Decor Framed Painting</Text>
                        <Box display={"flex"} gap={6} fontWeight={'bold'} w={'200px'}>
                            <Text>$199.99</Text>
                            <Text display={"flex"}>
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                                <img className="h-5" src="/Images/star.jpg" />
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Stack>

        </Stack >
    )
}

export default Midsection