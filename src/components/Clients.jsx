import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} min-h-[128px] sm:min-w-[192px] min-w-[120px] mx-8`}>
            <img
              src={client.logo}
              alt='client'
              className='sm:w-[192px] w-[100px] object-contain'
            />           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
