import React from "react";
import { Link } from 'react-router-dom';
import Portrait from '../App/Images/Portrait.jpg'




export function Home() {
    return (
        <div className="Home">

            <div className="box hire_me">
                <Link className="hire_me_title title" to="/hire"><span>hire me</span></Link>
                <Link className="hire_me_img square" to="/hire">
                    <Link className="Link" to="/hire">Custom built</Link>
                    <Link className="Link" to="/hire"></Link>
                    <Link className="Link" to="/hire">Responsive</Link>
                    <Link className="Link" to="/hire">Websites</Link>
                    <Link className="Link highlight " to="/hire">Work <br /> with me.</Link>
                    <Link className="Link" to="/hire">Frontend Developer</Link>
                </Link>
            </div>

            <div className="box about_me">
                <Link className="about_me_title title" to="/about"><span>about me</span></Link>
                <Link className="link" to="/about">
                    <img className="about_me_img square" alt="Giuseppe Falcidia Portrait" src={Portrait} />
                </Link>
            </div>

            <div className="box my_work">
                <Link className="my_work_title title" to="/work"><span>projects</span></Link>
                <Link className="my_work_img square" to="/work">
                    <Link className="Link" to="/work">CSS3</Link>
                    <Link className="Link" to="/work">HTML5</Link>
                    <Link className="Link" to="/work">ReactJs</Link>
                    <Link className="Link highlight " to="/work">Latest<br />Projects</Link>
                    <Link className="Link" to="/work">React Native</Link>
                    <Link className="Link" to="/work">JavaScript</Link>
                </Link>
            </div>

        </div>


    );
}




