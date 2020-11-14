import axios from "axios";

const KEY = "AIzaSyBsTH8xRfSEhE1_LNRdyvV4geewzVE2P1A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
