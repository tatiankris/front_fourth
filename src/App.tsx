import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Routing} from "./Routing";
import ErrorsBar from "./components/errorsBar/ErrorsBar";
import {Backdrop, CircularProgress} from "@mui/material";
import {useAppDispatch, useAppSelector} from "./hooks";
import {authTC} from "./store/authReducer";

function App() {

    const status = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authTC())
    }, [])

  return (
    <div className="App">
        <Backdrop open={status === 'loading'} sx={{color: '#fff', zIndex: 10}}>
            <CircularProgress color="inherit"/>
        </Backdrop>
      <Header/>
      <Routing />
        <ErrorsBar/>
    </div>
  );
}

export default App;
