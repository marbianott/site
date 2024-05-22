import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.linkedin.com/in/marbiano-transportes-172998263/?originalSubdomain=br' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link to='https://www.instagram.com/marbianotransportescatalao/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
      <Link to='https://www.facebook.com/marbianotransportes' className="cs-center">
        <Icon icon="fa6-brands:facebook" />              
      </Link>
    </Div>
  )
}
