import React from 'react'
import AllCategorieManu from '../AllCategories'
import ProductsMenu from '../Productsmenu'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MenuLeftBarLayout = () => {
    const {t} = useTranslation()
  return (
    <div className='flex items-center gap-x-5 text-white'>
        <AllCategorieManu />
        <ProductsMenu />
        <Link to={'/blog'} className='font-montserrat font-bold text-base'>{t('Blog')}</Link>
        <Link to={'/contact'} className='font-montserrat font-bold text-base'>{t('Contact')}</Link>
    </div>
  )
}

export default MenuLeftBarLayout