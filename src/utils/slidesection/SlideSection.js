import React from 'react'
import './SlideSection.css'

const SlideSection = () => {
  return (
    <> 
      <div className='Container'>
          <div className='Rightimg'>
              <img className='img' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/ali-karimiboroujeni-sCPxLsFbKNo-unsplash.jpg" alt="" />
          </div>
          <div className='leftContent'>
              <div className='text'>
                 <h2 className='h2' >Portratis</h2>  
                 <h1 className='h1'>Special Design <br /> for your projects</h1>   
              </div>
              <div className='explore-now-btn'>
                 <span className='span'>EXPLORE NOW</span>
              </div>
          </div>
      </div>
    </>
  )
}

export default SlideSection
