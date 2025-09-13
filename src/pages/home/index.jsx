import { Button } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../globalComponents/Container'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1>{t('this_is_home_page')}</h1>
      </Container>
    </div>
  )
}

export default Home