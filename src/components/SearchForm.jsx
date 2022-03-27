import React, { useState } from "react";
import { connect } from "react-redux";
import { submitSearch } from "../store/actions";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//import LoadingButton from '@mui/lab/LoadingButton';

function SearchForm(props) {
    console.log("PROPS", props);
    const [search, setSearch] = useState("");
    const handleChange = event => {
        setSearch(event.target.value)
    }
    // e.preventDefault cancels the refresh of the page by the form
    return (
        // <div className="search">
        //     <form className="" onSubmit={(e) => {e.preventDefault(); props.submitSearch(search)}}>
        //         <label htmlFor="search"> Search:</label>
        //         <input type="text" id="search" name="search" value={search} onChange={handleChange}/>
        //         <button>Cherche</button>
        //     </form>
        // {props.isError && <p className="error">{props.error}</p>}
        // </div>

        <div className="searching">
            <form className="" onSubmit={(e) => {e.preventDefault(); props.submitSearch(search)}}>
                <legend>Which superhero are you looking for?</legend>
                <div className="inner-form">
                    <div className="input-field">
                        <button className="btn-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </button>
                        <input id="search" type="text" name="search" value={search} onChange={handleChange} placeholder="Search"/>
                    </div>
                </div>
            </form>
            {props.isError && <p className="error">{props.error}</p>}
        </div>
    )
}
const mapStateToProps = state => {
    console.log("MSTP", state);
    return {
        isLoading: state.SHR.isLoading,
        isError: state.SHR.isError,
        error: state.SHR.error
    }
}

export default connect(mapStateToProps, { submitSearch })(SearchForm)