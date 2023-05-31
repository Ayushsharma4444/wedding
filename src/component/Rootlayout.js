import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import BackgroundImageInterval from '../component/landing-page/comp/BackgroundImageInterval'
const Rootlayout = () => {
  return (
    <div>
    {/* <BackgroundImageInterval /> */}
    <Outlet/>
    </div>
  )
}

export default Rootlayout