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



export default function Cart() {

  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);

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
                    <TableCell className='tableBody' align="center"><button onClick={() => { deleteItem(e.id) }}> Remover Producto </button> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />

          <button onClick={emptyCart}> Vaciar Carro </button>
          <br />
          <br />
          <br />
          <div className='gretting2' style={{ height: 400 }}>
            TOTAL :  $ {getItemPrice()}
            <br />
            <br />
            <button>Finalizar Compra</button>
          </div>
        </>
        :
        <>
          <div className='gretting' style={{ height: 400 }}>
            <p> 👉    Your cart is empty </p>

            <Link to={'/'}><button> ♻ HOME </button></Link>

          </div>
        </>
      }
    </>
  )
}