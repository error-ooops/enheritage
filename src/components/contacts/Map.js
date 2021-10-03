import React from 'react'
import './Map.css'

function Map() {
    return (
        <div className="map">
            <div className="back__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156389.0966359854!2d20.920768265186165!3d52.23285463553595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2s!4v1633270032196!5m2!1sen!2s" width="1920" height="663" style={{border: "1px solid #000"}}allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Map
