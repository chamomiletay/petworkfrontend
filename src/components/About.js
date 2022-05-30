import React from "react";
import bentleyPhoto from './bentley-crop.jpeg'
import creamcheesePhoto from './cream-cheese2.jpg'
import { AboutContainer, AboutContent, AboutH2, AboutP} from './AboutElements'
import pawprint from './blue-pawprint.png'
import './About.css'

const About = () =>{
    return(
        <div>
            <AboutContainer>
                <AboutContent>

                    <img className='pawprint' src={pawprint} alt='pawprint'/>
                        <AboutH2 className="title">
                            About
                        </AboutH2>
                    <img className='pawprint'src={pawprint} alt='pawprint'/>

                    <AboutP>
                    <div className='main-heading'>

                    </div>
                     <p>Hello, pet pawdience! We are Petwork!</p>

                    {/* Pet profile pics here ! */}
                    <div className="pet-container">
                        <div className="pet">

                            {/* Cream Cheese! (Sena) */}
                            <img className='profile-pic' src={creamcheesePhoto} alt="cream cheese's breed info here"/>

                            <h3>Cream Cheese</h3>

                        </div>

                        <div className="pet">
                            {/* Bentley! (Taylor) */}
                            <img className='profile-pic' src={bentleyPhoto} alt="black and white shih-tzu"/>

                            <h3>Bentley</h3>

                        </div>

                        <div className="pet">
                            {/* [insert name]! (Briana) */}
                            <img className='profile-pic' src='' alt="briana's fur baby"/>

                            <h3>Briana's fur baby [sry i forgot his name!]</h3>

                        </div>

                    </div>

                    <div className="description">
                        <p>
                            We're a team of happy-go-lucky dog parents that are eager connect with fellow pet parents and share our love for our fur babies.
                        </p>
                        <p>
                            <span className="bold">Click on our photos</span> to learn more about the pawrents behind Petwork!
                        </p>
                    </div>
                        

                    </AboutP>
                </AboutContent>
            </AboutContainer>


        </div>

)
}

export default About;