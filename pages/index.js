import {Container, Box, Heading} from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius = "lg" bg="#F6F0E7" p={3} mb={6} align="center"> 
                Hello, I&apos;m an IT-Technician and a full-stack developer based in Denmark!
            </Box>             
             <Box display={{md:'flex'}}>
             <Box flexGrow={1}>
            <Heading as ="h2" variant= "page-title">
                Sumit Timalsina
            </Heading>
        <p>Technology nerd (IT Technician /  Product developer / Web developer)</p>
             </Box>
             </Box>
        </Container>
       
    )
}
export default Page