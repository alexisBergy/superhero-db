import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import CustomCard from './components/CustomCard';
import Stack from '@mui/material/Stack';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type : "IS_LOADED"})
  }, [])
  const superhero = props.superheroes;
  return (
    <div className="App s006">
      {/* <div style={{backgroundColor :"#2c6d4b"}}> </div>  */}
      {/* {props.superheroes.length > 9 ? backgroundColor : } */}
      <header className="App-header">
        <SearchForm />
        {/* {props.isLoading && <h2>Loading ...</h2>} */}
      </header>
      {/* <div className='superheros'> */}
        <div className='grid-container'>
          {superhero && superhero.map(sh => {
            return (
              <div className='grid-item' key={sh.id}>
                <CustomCard
                  image = {sh.image.url}
                  name = {sh.name}
                  fullName = {sh.appearance.gender}
                  occupation = {sh.work.occupation}
                  publisher = {sh.biography.publisher}
                />
              </div>
            )
          })}
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading : state.SHR.isLoading,
    superheroes : state.SHR.superheroes,
  }
}

export default connect(mapStateToProps, [])(App);
