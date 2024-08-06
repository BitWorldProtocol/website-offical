import React from 'react'
import { marketing } from '../assets'
import styles, { layout } from '../style'

const ClientManage = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={marketing}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gradient`}>客户关系管理</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        通过互联网、大数据模型等软硬件技术，帮助企业定制化开发 基于客户信息的营销管理、数据分析、积分价值，全业务、全渠道的信息推流、营销为一体 的解决方案
        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div> */}
      </div>  
    </section>
  )
}

export default ClientManage
