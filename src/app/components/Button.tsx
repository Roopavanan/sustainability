import React from 'react'
import {motion} from 'framer-motion'

const Button = () => {
  return (
    <div className='mt-2'>
       <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 flex flex-col sm:flex-row gap-6"
      >
        <button className="px-6 py-3 bg-[#90C645] text-white rounded-full font-semibold   w-full sm:w-[230px]">
          APPLY NOW
        </button>
        <button className="px-6 py-3 border border-[#90C645] text-[#90C645] rounded-lg font-semibold  w-full sm:w-auto">
          DOWNLOAD BROCHURE
        </button>
      </motion.div>
    </div>
  )
}

export default Button
