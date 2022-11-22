import * as React from "react";
import {Paper, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setAppErrorAC} from "../../store/appReducer";


function ErrorsBar() {

    const dispatch = useAppDispatch();
    const message = useAppSelector(state => state.app.error)

    setTimeout(() => {
        dispatch(setAppErrorAC(null))
    }, 4000)

    return (

        <div style={{position: 'absolute', left:'8px', bottom:'8px'}}>
            {message &&
                <Paper elevation={6} style={{padding:'30px', backgroundColor: 'red', color: 'white'}}>
                        {message}
            </Paper>
            }
        </div>
    )
}
export default ErrorsBar;