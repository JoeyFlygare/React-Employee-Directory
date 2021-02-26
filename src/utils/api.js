import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=200';

export default {
  randomUser: function() {
    return axios.get(BASEURL);
  }
};
