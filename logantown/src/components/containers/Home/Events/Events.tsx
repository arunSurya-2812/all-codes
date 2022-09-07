import React from "react";
import "./EventStyle.scss";
import { useSelector, useDispatch } from "react-redux";
import { getEventList } from "../../../stateContainers/Events/ThunkAction";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Events() {
  const dispatch = useDispatch();
  const { eventData } = useSelector((state: IRootState) => state);
  const ourEvent = eventData && eventData.ourEvents;
  const sortEvent = [...ourEvent].sort(function (a: any, b: any) {
    return b.eid - a.eid;
  });

  React.useEffect(() => {
    if (ourEvent && ourEvent.length < 1) {
      dispatch(getEventList());
    }
  }, []);
  
  return (
    <section className="events-wrapper">
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "#ffffff",
          boxShadow:
            "0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
          borderRadius: "6px",
          marginTop: "-85px",
        }}
      >
        <div className="event-container">
          <h2 className="event-header-h1">Upcomming Events</h2>
          <span className="event-header-line"></span>
          <Box sx={{ maxWidth: "90%", flexGrow: 1, margin: "0 auto" }}>
            {sortEvent.map((step) => (
              <div className="card-items">
                <Paper
                  sx={{
                    p: 2,
                    margin: "auto",
                    maxWidth: "90%",
                    flexGrow: 1,
                    boxShadow: "none",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item>
                      <ButtonBase sx={{ width: 400 }} className="event-btn">
                        <Link to={`/booking/${step.eid}`}>
                          <Img
                            alt="complex"
                            className="event-img"
                            src={step.url}
                          />
                        </Link>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid
                        item
                        xs
                        container
                        direction="column"
                        spacing={2}
                        sx={{
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        <Grid item xs>
                          <Link to={`/booking/${step.eid}`}>
                            {" "}
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              sx={{
                                fontFamily: "JosefinSansSemiBold",
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Link>
                          <Typography variant="body1" gutterBottom>
                            {step.details}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            ID: {step.eid}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" component="div">
                          ${step.entry}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            ))}
          </Box>
        </div>
        {/* </div> */}
      </Box>
    </section>
  );
}
