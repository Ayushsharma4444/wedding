import React from 'react'
import './Intro.css';

const Intro = () => {
  return (
    <div className='IntroMain'>
          <div className='IntroMain-LeftDiv'>
              <span className='span'>My name is Alex Novo, <br />
                  I’m a <span className='span1'>Photographer.</span>
              </span>
              <p className='p'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut <br /> sem nulla. Vel turpis nunc eget lorem dolor.
              </p>
              <div className='ReadMore'>
                <span className='span'>READ MORE</span>
              </div>
          </div> 
          <div  className='IntroMain-RightDiv'>
                    <h6 className='h6'>WHAT WE PROVIDE</h6>
                    <hr className='hr' />
                    <p className='p'>Design</p>
                    <p className='p'>Prototyping</p>
                    <p className='p'>Video production</p>
                    <p className='p'>Promotion</p>
                    <p className='p'>Digital services</p>
                    <p className='p'>IT consulting</p>
          </div>
    </div>
  )
}

export default Intro
