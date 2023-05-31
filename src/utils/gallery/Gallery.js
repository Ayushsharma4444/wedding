import React from 'react'
import '../latestproject/LatestProjects.css'
import Navbar from '../../component/Navbar/Navbar'
import Getintouch from '../getintouch/Getintouch'

const Gallery = () => {
  return (
    <>
    <Navbar/>
       <div className='latestProjects'>
           <h1 className='h1'>  Latest <span className='h1Span'>projects.</span></h1>
           <div className='Typelist'>
               <span className='topicType'>All</span>
               <span className='topicType'>Creative</span>
               <span className='topicType'>Portraits</span>
               <span className='topicType'>Natural</span>
               <span className='topicType'>Visual</span>
               <span className='topicType'>Architecture</span>
           </div>
       </div> 
       <div className='PhotosSample'>
         <div className='container'>
           <div className='LeftImg'>
                <img className='img1' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/pgaberski-IDNBHZTamQ8-unsplash.jpg" alt="" />
                <img className='img2' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/tuce-2gYPTHAhBgM-unsplash-1738x2048.jpg" alt="" />
                <img className='img3' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/adrian-santalla-H5SBg5vlZk0-unsplash-1772x2048.jpg" alt="" />
           </div>
           <div className='RightImg'>
                <img className='img1' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/roman-denisenko-N5QeRgUwHpw-unsplash-1367x2048.jpg" alt="" />
                <img className='img2' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/soroush-golpoor-Q5Hu59VFPXM-unsplash.jpg" alt="" /> 
                <img className='img3' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/content-pixie-woMD-vhzOHI-unsplash.jpg" alt="" /> 
           </div>
         </div>
            
       </div>

       <Getintouch/>
    </>
  )
}

export default  Gallery

