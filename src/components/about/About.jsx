import React,{useState} from 'react'
import "./about.css"
import Badge1 from "../../assets/badge1.png"
import Badge2 from "../../assets/badge2.png"



const About = () => {
  const [toggleState,setToggleState]=useState(0);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  

  return (
    <section className="services section" id="services">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">What I do the best</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Full stack web Development</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState=== 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Full stack web Development</h3>
                        <p className="services__modal-description">
                            Can build both the front end and the back end of a website. Can design, develop, and maintain fully-fledged and functioning platforms with databases or servers.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    ReactJS
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    JavaScript,NodeJS
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    MongoDB,MySQL
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    HTML,CSS,Bootstrap
                                </p>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Solutions Architect AWS</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState=== 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Solutions Architect - Associate <br/> AWS</h3>
                        <p className="services__modal-description">
                        Possess practical experience utilizing AWS technology. Can be able to manage AWS services for computing, networking, storage, and databases. Have knowledge of establishing security controls and compliance regulations.
                        </p>
                        
                        <div className="badge__container">
                            <img src={Badge1} alt="" className="badge__img" />
                            <img src={Badge2} alt="" className="badge__img" />
                        </div>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Amazon EC2
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Amazon S3
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Amazon Amplify
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Amazon RDS,DynamoDB
                                </p>
                            </li>
                            

                        </ul>
                        
                        
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Freelance Cinematographer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon" ></i>
                </span>
                <div className={toggleState=== 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Freelance Cinematographer</h3>
                        <p className="services__modal-description">
                            I am a passionate freelance Cinematographer responsible for recording live events and small scale video productions.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Sony camera Enthusiast
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    2 years of experience
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Weddings, Corporate, and Entertainment events
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Content creation
                                </p>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

    </section>
    
  )
}

export default About