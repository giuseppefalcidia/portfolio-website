import React, { useEffect, useState } from "react";
import chat_app from "./media/chat_app.png";
import login_system from "./media/login_system.png";
import movie_app from "./media/movie_app.png";
import tictactoe from "./media/tictactoe.png";
import weather_app from "./media/weather_app.png";




export function Work() {


    return (
        <div className="Work_wrapper">

            <div className="Work">


                <div className='cardWrapper'>
                    <a className="square_projects" href='https://github.com/giuseppefalcidia/chat-app' target='_blank' rel="noopener noreferrer">
                        <img src={chat_app} alt="chat app" />
                    </a>
                </div>



                <div className='cardWrapper'>
                    <a className="square_projects" href='https://github.com/giuseppefalcidia/login-system' target='_blank' rel="noopener noreferrer">
                        <img src={login_system} alt="login system" />
                    </a>
                </div>



                <div className='cardWrapper'>
                    <a className="square_projects" href='https://github.com/giuseppefalcidia/movie-app' target='_blank' rel="noopener noreferrer">
                        <img src={movie_app} alt="movie app" />
                    </a>
                </div>


                <div className='cardWrapper'>
                    <a className="square_projects" href='https://github.com/ediheid/tic-tac-toe-frontend' target='_blank' rel="noopener noreferrer">
                        <img src={tictactoe} alt="Tictactoe" />
                    </a>
                </div>

                <div className='cardWrapper'>
                    <a className="square_projects" href='https://github.com/giuseppefalcidia/weather-app' target='_blank' rel="noopener noreferrer">
                        <img src={weather_app} alt="weather app" />
                    </a>
                </div>

            </div>
        </div>

    );
}




