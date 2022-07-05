import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
//import dynamic from 'next/dynamic'
import NavBar from '../navbar'
//import Footer from '../footer'
//import VoxelDogLoader from '../voxel-dog-loader'

//const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  //ssr: false,
  //loading: () => <VoxelDogLoader />
//})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sumit Timalsina | Port-folio</title>
      </Head>

    <NavBar path={router.asPtah} />

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main