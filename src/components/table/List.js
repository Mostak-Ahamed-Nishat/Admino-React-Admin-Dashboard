import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import "../../sass/table.scss";

function List() {
  const rows = [
    {
      id: 11454541,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Nishat Mostakim",
      date: "1 March",
      amount: 798,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 11454561,
      product: "Dell 265xs",
      img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Leo Thon",
      date: "5 June",
      amount: 1350,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 11454691,
      product: "PS-5 GT",
      img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Karim Bhuia",
      date: "17 January",
      amount: 1198,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 11454751,
      product: "Canon 750D",
      img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Mila Chaocha",
      date: "6 March",
      amount: 900,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 11454951,
      product: "Nikon D5200",
      img: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Billah Mukali",
      date: "1 March",
      amount: 600,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 11454666,
      product: "Samsung A52s",
      img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Mir Mosarof",
      date: "17 June",
      amount: 300,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 11454111,
      product: "Dell H200",
      img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Mostak Ahamed",
      date: "28 February",
      amount: 699,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 11454268,
      product: "Hp Asp-600",
      img: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1600",
      customer: "Kim Zilani",
      date: "1 July",
      amount: 994,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];
  return (
    <div>
      <TableContainer className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Image</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.id}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.product}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  <img
                    src={row.img}
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50%" }}
                  />
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.customer}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.date}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.amount}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.method}
                </TableCell>
                <TableCell align="right" className="tableCell" align="left">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
