import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getUsersTC} from "../../store/usersReducer";
import {useCallback, useEffect} from "react";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

function Login() {

    const dispatch = useAppDispatch();
    let users = useAppSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])
    //
    // const onClickHandler = useCallback(() => {
    //     dispatch(getUsersTC())
    // }, [dispatch])

    if (!users) {users = [
        {
            _id: '0',
            email: 'default',
            password: 'default',
            registrationDate: 'default',
            lastLoginData: 'default',
            status: 'default',
            __v: 0
        }
    ]}

    const columns: GridColDef[] = [
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'registration', headerName: 'Registration', width: 130 },
        { field: 'lastLogin', headerName: 'Last login', width: 130 },
    ]

    const rows = users.map(u => {
        return {
            status:u.status,
            id: u._id,
            name: u.email,
            email: u.email,
            registration: u.registrationDate,
            lastLogin: u.lastLoginData
        }
    })

    return (
        <div className="Login" >
            Login
            <button
                // onClick={onClickHandler}
            >get users</button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    // rowsPerPageOptions={[6]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Login;