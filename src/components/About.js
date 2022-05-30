import React from "react";
import bentleyPhoto from './bentley-crop.jpeg'
import { AboutContainer, AboutContent, AboutH2, AboutP} from './AboutElements'
import pawprint from './blue-pawprint.png'

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
                        <img className='bentley' src={bentleyPhoto} alt="black and white shih-tzu"/>
                        
                    </AboutP>
                </AboutContent>
            </AboutContainer>


        </div>

)
}

export default About;