import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>FrontEnde develpment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>React</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_frontend'>
          <h3>Backend develpment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>MondoDB</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' /> 
              <div>
                <h4>Strapi</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience