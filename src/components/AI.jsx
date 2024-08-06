import React from 'react'
import { ai } from '../assets'
import styles, { layout } from '../style'

const AI = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>AI+垂直行业应用</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
        结合行业实际需求,通过人工智能技术,利用其强大的数据处理能力、算力支持、智能化本地和云端部署知识库辅助决策,在各行业垂直领域逐步落地,为企业和个人创造更多价值
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={ai}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default AI
