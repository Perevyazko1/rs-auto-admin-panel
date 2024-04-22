import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  date: string,
  car: string,
  gosNumber: string,
  client: string,
  phone: string,
  typeWork: string,
  varietyWork: string,
  statusRecord: string,
  complait: string,
  cost: string,
) {
  return { date, car, gosNumber, client, phone,typeWork, varietyWork, statusRecord, complait, cost };
}

const rows = [
  createData('22/04/24','Opel Astra', 'Y 570 PX', 'Тимофей Шевченко',
      '+7 900 999 99 99', 'Ремонт глушителя', 'Монтаж заменителя катализатора', 'Ожидание', 'Не определено', '3000 руб.'),
  createData('22/04/24','Opel Astra', 'Y 570 PX', 'Тимофей Шевченко',
      '+7 900 999 99 99', 'Ремонт глушителя', 'Монтаж заменителя катализатора', 'Ожидание', 'Не определено', '3000 руб.'),
  createData('22/04/24','Opel Astra', 'Y 570 PX', 'Тимофей Шевченко',
      '+7 900 999 99 99', 'Ремонт глушителя', 'Монтаж заменителя катализатора', 'Ожидание', 'Не определено', '3000 руб.'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell component="th" scope="row">
                {row.car}
              </TableCell>
              <TableCell >{row.gosNumber}</TableCell>
              <TableCell >{row.client}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.typeWork}</TableCell>
              <TableCell >{row.varietyWork}</TableCell>
              <TableCell >{row.statusRecord}</TableCell>
              <TableCell >{row.complait}</TableCell>
              <TableCell align={"center"} >{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}