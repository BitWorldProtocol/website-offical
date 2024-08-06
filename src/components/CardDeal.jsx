import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>生态城市</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
        通过软件技术、无线传输技术、硬件智能传感设备结合大数据挖掘技术应用于城市生态环境治理，挖掘环境数据价值、多维度投射场景应用，进行城市生态资源及环境状况分析和评估，推进业务协同管理，构建生态环境治理新模式
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
