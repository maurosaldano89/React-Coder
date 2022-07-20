import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from "@mui/material";
import { DeleteForever, ShoppingCart } from "@mui/icons-material";



export default function Cart() {

  const { cart, getItemPrice, emptyCart, deleteItem, getItemQty } = useContext(CartContext);

  return (
    <>

      {cart.length > 0 ?
        <>
          <TableContainer className='tableContainer' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

              <TableHead>
                <TableRow  >
                  <TableCell className='tableCell' align="center">Imagen</TableCell>
                  <TableCell className='tableCell' align="center">Nombre</TableCell>
                  <TableCell className='tableCell' align="center">Cantidad</TableCell>
                  <TableCell className='tableCell' align="center">Precio</TableCell>
                  <TableCell className='tableCell' align="center">Precio Total</TableCell>
                  <TableCell className='tableCell' align="center">Eliminar</TableCell>

                </TableRow>
              </TableHead>


              <TableBody>
                {cart.map(e => (
                  <TableRow
                    key={e.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="e" align="center">
                      <img className='imagenCart' src={e.image} alt="imagen" />
                    </TableCell>
                    <TableCell className='tableBody' align="center">{e.name}</TableCell>
                    <TableCell className='tableBody' align="center">{e.qty}</TableCell>
                    <TableCell className='tableBody' align="center">{e.price}</TableCell>
                    <TableCell className='tableBody' align="center">{e.price * e.qty}</TableCell>
                    <TableCell className='tableBody' align="center">

                      <DeleteForever
                        onClick={() => {
                          deleteItem(e.id);
                        }}
                        className="buttoncontainer"
                        style={{ backgroundColor: "grey" }}
                      />

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "20px",
              gap: { sm: "300px" },
            }}
          >
            <Button
              className="buttoncontainer gretting2"
              variant="dangerUnfilled"
              sx={{ marginTop: { xs: "20px", sm: 0 } }}
              onClick={emptyCart}
            >
              VACIAR CARRO
            </Button>

            <Link
              style={{
                textDecoration: "none",
                backgroundColor: "transparent",
                color: "white",
              }}
              to="/checkout"
            >
              <Button
                className="buttoncontainer gretting2"
                variant="dangerUnfilled"
                sx={{ marginTop: { xs: "20px", sm: 0 } }}
              >
                Checkout
              </Button>
            </Link>
          </Box>

          <div className='gretting2' style={{ height: 400 }}>
            <Typography
              variant="h6"
              className="gretting"
              sx={{ fontWeight: "bold" }}
            >
              Total: $ {getItemPrice()}
              &nbsp;({getItemQty()} producto/s)
            </Typography>
            <Link to="/checkout"><button className='btn btn-warning fw-bold p-2 m-2  btnFinalBuy'>Finalizar Compra</button></Link>
          </div>
        </>
        :
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
              margin: "auto",
              marginTop: "1rem",
              marginBottom: "4rem",
              gap: 3,
            }}
          >
            <ShoppingCart
              color="primary"
              sx={{ fontSize: "80px", margin: "3rem" }}
            />

            <Typography className="gretting" variant="h5">
              SU CARRITO ESTÁ VACÍO
            </Typography>

            <Link to={"/"}>
              <button> VOLVER A HOME </button>
            </Link>
          </Box>
        </>
      }
    </>
  )
}