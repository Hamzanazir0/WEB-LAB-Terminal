import React from "react";
import { Grid, Button } from "@material-ui/core";
import matchService from "../../services/MatchsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const SingleMatch = (props) => {
  const { match, history, onDelete } = props;
  console.log(props);

  return (
    <Grid item xs={4}>
      <h2>
        {match.city}{" "}
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/matchs/update/" + match._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                matchService
                  .deleteMatch(match._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p>{match.date}</p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleMatch);
