import React from 'react'
import Home from "../containers/homepage/home"
import GoogleFontLoader from 'react-google-font-loader';
import Helmet from "react-helmet"





const Thome = () => {
    return (
        
        <div>
            <Helmet>
                <title>Home / Twitter</title>
            </Helmet>
            <GoogleFontLoader
                fonts={[
                    {
                    font: 'Open Sans',
                    weights: [400,700, '700i', '400i'],
                    }
                ]}
            />
            <Home />
        </div>
    )
}

export default Thome
