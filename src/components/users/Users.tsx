import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useState} from "react";
import {blockUsersTC, deleteUsersTC, unblockUsersTC} from "../../store/usersReducer";
import {DataGrid, GridColDef, GridSelectionModel} from "@mui/x-data-grid";
import {Container, Grid, IconButton, Paper, Stack, SvgIcon, TableContainer} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LOGIN} from "../../Routing";
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Users() {


    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    let users = useAppSelector(state => state.users.users)

    if (!users) {users = [
        {
            _id: '0',
            email: 'default',
            password: 'default',
            registrationDate: 'default',
            lastLoginDate: 'default',
            status: 'default',
            __v: 0
        }
    ]}

    const columns: GridColDef[] = [
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'registration', headerName: 'Registration', width: 210 },
        { field: 'lastLogin', headerName: 'Last login', width: 210 },
    ]

    const rows = users.map(u => {
        return {
            key: u._id,
            status:u.status,
            id: u._id,
            name: u.email,
            email: u.email,
            registration: u.registrationDate,
            lastLogin: u.lastLoginDate
        }
    })

    const [checkedUsers, setCheckedUsers] = useState<GridSelectionModel>([])

    const onHandleBlock = () => {
        dispatch(blockUsersTC(checkedUsers))
    }

    const onHandleUnblock = () => {
        dispatch(unblockUsersTC(checkedUsers))
    }

    const onHandleDelete = () => {
        dispatch(deleteUsersTC(checkedUsers))
    }

    if (!isLoggedIn) {
        navigate(LOGIN)
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} marginTop={'20px'}>

                <Stack
                    direction="row"
                    spacing={4}
                    height={50}
                    paddingBottom={2}
                    marginLeft={14}
                >
                    <IconButton onClick={onHandleBlock}>
                        <SvgIcon color={'error'} component={LockIcon} />
                    </IconButton>
                    <IconButton color={'primary'} onClick={onHandleUnblock}>
                        <SvgIcon component={LockOpenIcon} />
                    </IconButton>
                    <IconButton onClick={onHandleDelete}>
                        <SvgIcon component={DeleteIcon} />
                    </IconButton>
                </Stack>


                <TableContainer component={Paper}>
                    <div style={{height: 530, width: '100%'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={8}
                            checkboxSelection
                            onSelectionModelChange={(newSelectionModel) => {
                                console.log(newSelectionModel)
                                if (newSelectionModel.every(u => typeof u === "string")) {
                                    setCheckedUsers(newSelectionModel);
                                }

                            }}
                            selectionModel={checkedUsers}
                        />
                    </div>
                </TableContainer>
            </Grid>
        </Container>
    );
}

export default Users;