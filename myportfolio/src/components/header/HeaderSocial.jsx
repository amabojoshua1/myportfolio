/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'


export default function headerSocial() {
  return (
    <div className='header_social'>
      <a href='#'><i class="fa-brands fa-facebook"></i></a>
      <a href='https://github.com' target='blank'><FaGithub/> </a>
      <a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
      <a href='https://twitter.com' target='blank'><CgTwitter/> </a>

    </div>
  )
}