import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <box-icon name='award' className='about__icon'></box-icon>  
            <h3 className="about__title">Current</h3>
            <span className="about__subtitle">Student</span>
        </div>
        <div className="about__box">
        <box-icon name='briefcase-alt' className='about__icon'></box-icon>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3 Projects</span>
        </div>
        <div className="about__box">
        <box-icon name='support' className='about__icon'></box-icon>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info