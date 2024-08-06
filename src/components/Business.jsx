import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import { capacity } from '../assets'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        {/* <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/>we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, 
          you can improve your financial life by building credit,
          earning rewards and saving money.
          But with hundreds of credit cards on the market.
        </p> */}
        {/* <Button styles='mt-10'/> */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={capacity}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5] rotate-2 scale-75'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
