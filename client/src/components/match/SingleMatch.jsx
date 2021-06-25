import React from "react";
import { Grid, Button } from "@material-ui/core";
import matchService from "../../services/MatchsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const SingleMatch = (props) => {
  const { match, onDelete, history } = props;
  console.log(match);

  return (
    <Grid item xs={4}>
      <h2>
        {"City Ground:"}
        {match.city}
      </h2>
      <p>
        {"Date:"}
        {match.date}
      </p>
      <p>
        {"Team A:"}
        {match.teamA}
      </p>
      <p>
        {"Team B:"}
        {match.teamB}
      </p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleMatch);
