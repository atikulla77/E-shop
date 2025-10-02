import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const MenuRightBarLayout = () => {
  const {t} = useTranslation();
  return (
    <div className='flex items-center justify-end gap-x-20 '>

      <Link to={'/product'} className='font-montserrat font-[600] text-base'>{t('LIMITED SALE')} 👋🏻</Link>
      <Link to={'/product'} className='font-montserrat font-[600] text-base'>{t('Best Seller')}</Link>
      <Link to={'/product'} className='font-montserrat font-[600] text-base'>{t('New Arrival')}</Link>

    </div>
  )
}

export default MenuRightBarLayout