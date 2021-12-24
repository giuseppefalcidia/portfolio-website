import React from 'react';

export function PopUp({ onClick }) {
    return (
        <button className="popUp" onClick={onClick}>
            <div>Hey there!<span role="img" aria-label="hello wave">👋</span><br />
                Before we start ..
                Wanna see something cool?
                <span className="brM" />
                <span>PLEASE<br />
                    CLICK HERE</span>
                <span className="brM" />
                and allow "Motion and Orientation Access"</div>
        </button>
    )
}