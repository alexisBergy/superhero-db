import axios from "axios";
import env from "react-dotenv";

export const submitSearch = search => {
    return dispatch =>  {
        dispatch({type : "SEARCH_START", payload : search})
        axios.get(`https://personal-cors-abn.herokuapp.com/` + env.API_URL + `search/${search}`)
        .then(res => {
            if (res.data.error){
                dispatch({type : "SEARCH_ERR", payload : res.data.error})
            }
            else{
                dispatch({type : "SEARCH_SUCC", payload : res.data.results})
            }
            
        })
        .catch(err => console.error(err))
    }
}
