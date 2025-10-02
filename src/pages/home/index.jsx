import Container from '../../globalComponents/Container'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
      </Container>
    </div>
  )
}

export default Home