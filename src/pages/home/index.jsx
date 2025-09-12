import { Button } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../globalComponents/container'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1>This is home page</h1>
      </Container>
    </div>
  )
}

export default Home