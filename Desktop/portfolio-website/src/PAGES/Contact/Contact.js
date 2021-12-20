import React from "react";
import contact_pic from "./media/contact_picture.png";
import instagram from "./media/instagram.png";
import linkedin from "./media/linkedin.png";
import github from "./media/github.png";



export function Contact() {

    return (


        <div className="Contact">
            <div className="contact_title">Contact</div>
            <img className="contact_pic" src={contact_pic} alt="" />
            <div className="black_div"></div>
            <div className="contact_p">



                <div className="text">


                    <h3 className="name">Giuseppe Falcidia</h3>

                    <h3>+49 388 150 66 88</h3>
                    <h3>giuseppefalcidia.mail@gmail.com</h3>
                    <br />

                    <a href="https://www.instagram.com/howyoumode/" target="_blank" rel="noopener noreferrer">
                        <img className="instagram hyperlink" src={instagram} alt="link to instagram" />
                    </a>

                    <a href="https://www.linkedin.com/in/giuseppe-falcidia-82020215a/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin hyperlink" src={linkedin} alt="link to linkedin" />
                    </a>

                    <a href="https://github.com/giuseppefalcidia" target="_blank" rel="noopener noreferrer">
                        <img className="github hyperlink" src={github} alt="link to github" />
                    </a>

                    <br />
                </div>

            </div>
        </div>


    );
}




