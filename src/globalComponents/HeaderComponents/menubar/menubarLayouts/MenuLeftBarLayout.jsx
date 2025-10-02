import React from 'react'
import AllCategorieManu from '../AllCategories'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MenuLeftBarLayout = () => {
    const {t} = useTranslation()
  return (
    <div className='flex items-center gap-x-20'>
        <AllCategorieManu />
        <Link to={'/product'} className='font-montserrat font-[600] text-base'>{t('Products')}</Link>

        <Link to={'/blog'} className='font-montserrat font-[600] text-base'>{t('Blog')}</Link>
        <Link to={'/contact'} className='font-montserrat font-[600] text-base'>{t('Contact')}</Link>
    </div>
  )
}

export default MenuLeftBarLayout