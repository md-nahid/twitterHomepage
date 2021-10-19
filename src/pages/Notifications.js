import React from 'react'
import Notificationspage from '../containers/Notifications/Notificationspage';
import GoogleFontLoader from 'react-google-font-loader';
import Helmet from "react-helmet"

const Notifications = () => {
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
            <Notificationspage />
        </div>
    )
}

export default Notifications
