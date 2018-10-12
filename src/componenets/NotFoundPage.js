import React from 'react';

import {Link} from 'react-router-dom';

// Used for 404 page, plays youtube video
import YouTube from 'react-youtube';

const _404Opts = {
    height: '390', 
    width: '640',
    playerVars: {
        autoplay: 1
    }
}
const NotFoundPage = () => (
    <div>
        <h1>404 Not Found</h1>

        <YouTube 
            videoId="ZZ5LpwO-An4"
            opts={_404Opts}
        />

        <br />
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;