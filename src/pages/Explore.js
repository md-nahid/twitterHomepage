import React from 'react'
import Explorepage from '../containers/Explorepage/Explorepage'
import GoogleFontLoader from 'react-google-font-loader';
import Helmet from "react-helmet"

const Explore = () => {
    return (
        <div>
            <Helmet>
                <title>Explore / Twitter</title>
            </Helmet>
            <GoogleFontLoader
                fonts={[
                    {
                    font: 'Open Sans',
                    weights: [400,700, '700i', '400i'],
                    }
                ]}
            />
            <Explorepage />
        </div>
    )
}

export default Explore
