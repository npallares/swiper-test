import React from 'react'

export const Slice = ({index}) => {
    return (
        <div className='flex w-full h-[350px]'>
          <div className='flex flex-col-reverse w-6/12 h-full z-10 '>
            <div className='flex flex-col items-start h-[250px] w-full '>
              <div className='w-full h-full'>
                <p className='flex pl-12 font-cairo text-white text-2xl drop-shadow-md mt-[120px]'>UPD, el último primer día de clases. El primer día de un crimen.</p>
                <div className='flex w-full h-[50px] items-start mt-[15px]'>
                  <button className=' w-[160px] h-[40px] rounded-full  bg-emerald-500 hover:bg-emerald-600 ml-12'>REPRODUCIR</button>
                  <button className=' w-[160px] h-[40px] rounded-full border-2 text-white ml-[25px] hover:text-black hover:bg-white'>MÁS INFO</button>
                </div>
              </div>
            </div>
          </div>
          <img className='absolute top-0 left-0 w-full h-[350px] z-0'src={`https://picsum.photos/2500/500?random=${index}`} alt={`${index}`}/>
        </div>
  )
}
