import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, coordinates, setBounds, bounds }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBuMnuQu6Oa6xXLqY3eaO75lfsZEvJL7UU" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne, });
                }}
            >
            </GoogleMapReact>
        </div>
    );
};

export default Map;