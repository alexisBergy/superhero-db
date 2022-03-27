import axios from "axios";
import env from "react-dotenv";

export const submitSearch = search => {
    return dispatch =>  {
        dispatch({type : "SEARCH_START", payload : search})
        axios.get(`https://cors-anywhere.herokuapp.com/` + env.API_URL + `search/${search}`)
        .then(res => {
            if (res.data.error){
                dispatch({type : "SEARCH_ERR", payload : res.data.error})
            }
            else{
                dispatch({type : "SEARCH_SUCC", payload : res.data.results})
            }
            console.log(res)//&& console.log(res) : <h2>No data found :/</h2>)

        })
        .catch(err => console.error(err))
    }
}

// export const submitSearch = search => {
//     return dispatch =>  {
//         var express = require('express'); 
//         var request = require('request'); 
//         var app = express();

//         dispatch({type : "SEARCH_START", payload : search})

//             app.get('/api', function(req, res){ 
//                 request(`https://www.superheroapi.com/api/112996507950034/search/${search}`, function (error, response, body) { 
//                   if (!error && response.statusCode === 200) { 
//                     console.log(body);
//                     dispatch({type : "SEARCH_SUCC", payload : response.data.results}) 
//                     //res.send(body); 
//                   }
//                   else {
//                       console.error(error);
//                   } 
//                  }); 
//               });
            
        
//     }
// }