
import { addArticle } from "../actions/index";


function fetchPosts() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

function service() {
    return (dispatch) => {
        return fetchPosts().then(([response, json]) =>{
            json.map( o => dispatch(addArticle({title:o.title, id:o.id})));

        })
    }
}

export default service;
