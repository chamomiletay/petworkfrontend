import React from "react";
import bentleyPhoto from './bentley-crop.jpeg'
import { AboutContainer, AboutContent, AboutH2, AboutP} from './AboutElements'

const About = () =>{
    return(
        <div>
            <AboutContainer>
                <AboutContent>
                    <AboutH2>
                        About
                    </AboutH2>
                    <AboutP>
                    <div className='main-heading'>

                    </div>
                     <p>Hello, pet pawdience! We are Petwork!</p>
                        <img className='bentley' src={bentleyPhoto} alt="black and white shih-tzu"/>
                        
                    </AboutP>
                </AboutContent>
            </AboutContainer>


        </div>

)
}

export default About;