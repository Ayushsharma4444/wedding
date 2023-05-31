import React from 'react'
import Navbar from '../Navbar/Navbar'
import Perfectteam from '../../utils/Perfectteam.js/Perfectteam'
import Latest from '../../utils/LatestNews/Latest'
import Getintouch from '../../utils/getintouch/Getintouch'
import PricingPlans from '../../utils/pricingplan/Pricingplan'
import Ourfeatures from '../../utils/ourfeatures/Ourfeature'
import Feedback from '../../utils/feedback/Feedback'
import Intro from '../../utils/Intro/Intro'
import LatestProjects from '../../utils/latestproject/LatestProjects'
import PhotosAndSignature from '../../utils/photoandsign/PhotosAndSignature'
import SlideSection from '../../utils/slidesection/SlideSection'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <SlideSection/>
        <Intro/>
        <PhotosAndSignature/>
        <LatestProjects/>
    <PricingPlans/>
    <Ourfeatures/>
    <Perfectteam/>
    <Feedback/>
    <Latest/>
    <Getintouch/>
    </div>
  )
}

export default Home