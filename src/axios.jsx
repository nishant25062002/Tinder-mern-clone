import axios from "axios";

const instance =axios.create({
baseURL:"https://tinder-bb.herokuapp.com/",
});

export default instance;