import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchsService";
import Auth from "../auth/Auth";

const NewMatch = (props) => {
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [teamA, setTeamA] = React.useState("");
  const [teamB, setTeamB] = React.useState("");

  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Match</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            label="Date"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            label="Team A"
            fullWidth
            value={teamA}
            onChange={(e) => {
              setTeamA(e.target.value);
            }}
          />

          <TextField
            label="Team B"
            fullWidth
            value={teamB}
            onChange={(e) => {
              setTeamB(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              matchService
                .addMatch({ city, date, teamA, teamB })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matchs");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewMatch;
