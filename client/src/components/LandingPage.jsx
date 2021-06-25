// import React from "react";
// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Landing Page</h1>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import SingleMatch from "./match/SingleMatch";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import matchService from "../services/MatchsService";
import userService from "../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const LandingPage = (props) => {
  const [matchs, setMatch] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    matchService
      .getMatch(page, perPage)
      .then((data) => {
        setMatch(data.matchs);
        setTotal(data.total);
        console.log(data.matchs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const handleNewMatchClick = () => {
    console.log(props);
    props.history.push("/matchs/new");
  };

  return (
    <div>
      <h1>List Of Matches</h1>
      Matches Per Page:{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewMatchClick}
        >
          <AddIcon />
        </Fab>
      )}
      {matchs.length == 0 ? (
        <p>There are no Matches</p>
      ) : (
        <Grid container spacing={3}>
          {matchs.map((match, index) => (
            <SingleMatch key={index} match={match} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/matchs/" + value);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + matchs.length}
      </Grid>
    </div>
  );
};

export default LandingPage;
