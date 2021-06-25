import GenericService from "./GenericService";
class MatchService extends GenericService {
  constructor() {
    super();
  }
  addMatch = (data) => this.post("matchs", data);
  deleteMatch = (_id) => this.delete("matchs/" + _id);
  updateMatch = (_id, data) => this.put("matchs/" + _id, data);
  getMatch = (page = 1, perPage = 10) =>
    this.get("matchs?page=" + page + "&perPage=" + perPage);
  getSingleMatch = (id) => this.get("matches/" + id);
}

let matchService = new MatchService();
export default matchService;
