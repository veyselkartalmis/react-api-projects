import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, coordinates, setBounds, places }) => {
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
                {
                    places?.map((place, i) => (
                        <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            {
                                isMobile ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img
                                            src={place.photo ? place.photo.images.large.url : "https://cdn-icons-png.flaticon.com/512/1377/1377194.png"}
                                            alt={place.name}
                                            className={classes.pointer} />
                                    </Paper>
                                )
                            }
                        </div>
                    ))
                }
            </GoogleMapReact>
        </div>
    );
};

export default Map;