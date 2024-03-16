import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                
            </div>
            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Engineering</h3>
                            <br></br>
                            <span className="qualification__subtitle">
                                Kongu Engineering College
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                            <br></br>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="qualification__marks">
                            <h3 className="qualification__title">8.09 CGPA</h3>

                        </div>
                    </div>

                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">Higher Secondary School</h3>
                            <br></br>
                            <span className="qualification__subtitle">
                                Grace International School
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2020 - 2021
                                </i>
                            </div>
                            <br></br>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="qualification__marks">
                            <h3 className="qualification__title">94.8 %</h3>

                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary School</h3>
                            <br></br>
                            <span className="qualification__subtitle">
                                Grace International School
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2018-2019
                                </i>
                            </div>
                            <br></br>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div className="qualification__marks">
                            <h3 className="qualification__title">95 %</h3>

                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}

export default Qualification