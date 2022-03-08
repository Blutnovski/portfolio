import React from 'react'
import Typical from 'react-typical';
import './Profile.css';

export default function 
() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">   
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>    
                    </a>    
                    <a href="#">
                        <i className="fa fa-google-plus-square"></i>    
                    </a>    
                    <a href="#">
                        <i className="fa fa-instagram"></i>    
                    </a>    
                    <a href="#">
                        <i className="fa fa-youtube-square"></i>    
                    </a>    
                    <a href="#">
                        <i className="fa fa-twitter"></i>    
                    </a>    
                    </div>  
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hallo, mein Name ist <span className="highlighted-text">Moritz</span>    
                    </span>    
                </div>  
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Ingenieur",
                                2500,
                                "Softwareentwickler",
                                2500,
                                "KI Entwickler",
                                2500,
                            ]}
                            />
                        </h1>  
                        <span className="profile-role-tagline">
                        Erstellen von Software im Bereich Industrie 4.0 und Digitaler Zwilling
                    </span>  
                    </span>    
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {""}
                        Hire Me
                    </button>
                    <a href="lebenslauf.pdf" download="Moritz Jena.pdf">
                        <button className="btn highlighted-btn">
                            Get Resume    
                        </button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
