
import React from "react";
import { Link } from 'react-router-dom';
import Portrait from '../App/Images/Portrait.jpg'

export function About() {

    return (

        <div className="about">

            <img className="about_Portrait" src={Portrait} alt="Giuseppe Portrait" />

            <Link className="skills">
                <Link className="Link shorter" >Giuseppe Falcidia</Link>
                <Link className="Link" style={{ fontSize: '.92em' }}>Italian, 26</Link>
                <Link className="Link small" >Based in:</Link>
                <Link className="Link shorter" >Berlin, Germany</Link>
                <span className="brS" />
                <Link className="Link" >I speak: <span role="img" aria-label="italian, english, german flag">🇮🇹🇬🇧🇩🇪</span></Link>

            </Link>


            <div className="aboutContent">
                <h1>WHO AM I?</h1>
                <span className="brXL" />

                <h2>#ROOTS</h2>
                <p>Hey there! <span role="img" aria-label="hello wave">👋</span><br />
                    I'm Giusepe Falcidia, 26 years old, I was born in Noto, Sicily - birthplace of the Baroque style.
                    For the past 10 years I've been living between London, Milan and Berlin.</p>
                <span className="brM" />

                <h2>#EDUCATION</h2>
                <p>
                    I have gained extensive knowledge of various fields of luxury and fashion business, content creation and digital marketing, and during the last 12 months: Full-Stack MERN technologies and database management systems.
                    I always approached my studies with a practical mindset and trained myself to be independent but as collaborative as possible.
                </p>
                <span className="brM" />


                <h2>#STRENGTHS</h2>
                <p>I enjoy finding creative solutions to challenging problems and distinguish myself through my strong communication, teamwork skills and high willingness to learn. </p>
                <p>I am driven by the idea of creating and developing new concepts, establishing new processes, and writing cross- browser code which is scalable and responsive.</p>
                <span className="brM" />


                <h2>#WORK AVAILABILITY</h2>
                <p>
                    I'm looking for a front-end developer & content creator position, in a young and innovative company where I can express myself and grow within the team.
                    I would be especially interested to work in an environment where my hard and soft skills can be challenged every day.
                    If you think I'm a good fit for your team, you can get in touch <Link className="Link deco" to="/hire">here</Link>
                </p>
            </div>

        </div>

    );
}




