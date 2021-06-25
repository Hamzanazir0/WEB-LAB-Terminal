import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchsService";
import Admin from "../auth/Admin";

const UpdateMatch = (props) => {
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState(0);
  const [teamA, setTeamA] = React.useState(0);
  const [teamB, setTeamB] = React.useState(0);
  const id = props.match.params.id;

  React.useEffect(() => {
    matchService.getSingleMatch(id).then((data) => {
      setCity(data.city);
      setDate(data.date);
      setTeamA(data.teamA);
      setTeamB(data.teamB);
    });
  }, []);

  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Match</h1>
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
                .updateMatch(id, { city, date, teamA, teamB })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matchs");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateMatch;
