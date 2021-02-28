import React, {Component  } from 'react';

class GoogleMap extends Component {
    render() {
        var mapProperties = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        }
        return(
            <div>
                <h1>My Google Map</h1>
                
            </div>
        );
    }
}