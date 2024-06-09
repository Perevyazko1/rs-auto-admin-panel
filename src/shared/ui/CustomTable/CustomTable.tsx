import * as React from 'react';
import {memo, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxios from "../../../providers/api/axios/axios";
import {useAppdispatch, useAppSelector} from "../../hooks/Redux/redux";
import {TableRowType} from "../../../providers/api/models/TableRowType";
import {tableAppSlice} from "../../../providers/api/slice/TableSlice";
import {authAppSlice} from "../../../providers/api/slice/AuthSlice";
import moment from "moment";
import {LoadingButton} from "@mui/lab";


const BasicTable = memo(() => {
    const {tableData} = useAppSelector(state => state.tableAppSlice)

    const {data, error, loading, executeRequest} = useAxios<TableRowType[]>();
    const {tableApp} = tableAppSlice.actions
    const {authApp} = authAppSlice.actions
    const dispatch = useAppdispatch()
    const fetchData = async () => {
        try {

            await executeRequest('GET', 'organization_app/get_reception/');


        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };


    useEffect(() => {

        fetchData();


    }, []);

    useEffect(() => {
        if (data) {
            console.log(data)
            dispatch(tableApp(data))
        }
        if (error) {
            error?.response?.status === 401 && dispatch(authApp({auth: false, user: ""}))
        }

    }, [loading]);


    return (
        <div style={{display:"grid", justifyContent:"center"}}>
            <LoadingButton
                sx={{
                    margin: "0 auto 20px auto"
                }}
                color="secondary"
                onClick={fetchData}
                loading={loading}
                loadingPosition="start"
                // startIcon={<SaveIcon/>}
                variant="contained"
            >
                <span>Обновить данные</span>
            </LoadingButton>

            <TableContainer component={Paper}>
                {!loading && tableData &&
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Дата проведения ТО</TableCell>
                                <TableCell>Автомобиль</TableCell>
                                <TableCell>Гос номер</TableCell>
                                <TableCell>Клиент</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Тип работы</TableCell>
                                <TableCell>Разновидность работы</TableCell>
                                <TableCell>Статус записи</TableCell>
                                <TableCell>Рекламация</TableCell>
                                <TableCell>Стоимость работы</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData && Object.values(tableData).map((row: TableRowType) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>{moment(row.date_time_record).format('DD/MM/YY - HH:MM')}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.car.brand} {row.car.model} / {row.car.year_of_issue}
                                    </TableCell>
                                    <TableCell>{row.car.gos_number}</TableCell>
                                    <TableCell>{row.client.first_name}</TableCell>
                                    <TableCell>{row.client.phone}</TableCell>
                                    <TableCell>{row.type_of_work}</TableCell>
                                    <TableCell>{row.variety_of_work}</TableCell>
                                    <TableCell>{row.status_record}</TableCell>
                                    <TableCell>{row.complaint}</TableCell>
                                    <TableCell align={"center"}>{row.cost} р.</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
            </TableContainer>
        </div>
    );
});
export default BasicTable