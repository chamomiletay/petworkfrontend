import React from "react";
import bentleyPhoto from './bentley-crop.jpeg'
import creamcheesePhoto from './cream-cheese2.jpg'
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

                    {/* Pet profile pics here ! */}

                        {/* Cream Cheese! (Sena) */}
                        <img className='profile-pic' src={creamcheesePhoto} alt="cream cheese's breed info here"/>

                        {/* Bentley! (Taylor) */}
                        <img className='profile-pic' src={bentleyPhoto} alt="black and white shih-tzu"/>

                    </AboutP>
                </AboutContent>
            </AboutContainer>


        </div>

)
}

export default About;