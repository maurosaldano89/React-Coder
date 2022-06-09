import { useEffect, useState } from 'react'
import ItemList from './ItemList'



const ItemListContainer = (products) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);


  const productos = [
    {
      id: 1,
      name: 'Notebook ASUS UX5401 14" ',
      details: '',
      price: 185.000,
      stock: '../images/Notebook_ASUS_UX5401_14__Core_I5_1135G7_8GB_512GB_SSD_OLED_W10_f059b8fd-med.jpg'
    },
    {
      id: 2,
      name: 'Notebook ASUS X515EA 15.6"',
      details: '',
      price: 75.000,
      stock: 5,
      image: '../images/Notebook_Asus_X515EA_15.6__FHD_Core_I5_1135G7_8GB_256GB_SSD_NVMe_W11_Home_23426c7c-med.jpg'
    },
    {
      id: 3,
      name: 'Notebook HP G8 240 14"',
      details: '',
      price: 57.000,
      stock: 7,
      image: '../images/Notebook_HP_G8_240_14__Celeron_N4020_4GB_500GB_HDD_W10_64d30805-med.jpg'
    },
    {
      id: 4,
      name: 'Notebook Lenovo Thinkpad L15',
      details: '',
      price: 150.000,
      stock: 8,
      image: '../images/Notebook_Lenovo_Thinkpad_L15_15.6__Core_i7_1165G7_8GB_256GB_SSD_NVMe_Freedos_94851967-med.jpg'
    },
    {
      id: 5,
      name: "Disco Sólido SSD Adata 120GB",
      details: '',
      price: 3000,
      stock: 8,
      image: '../images/Disco_Solido_SSD_Adata_120GB_SU650SS_520MB_s__8b455937-med.jpg'
    },
    {
      id: 6,
      name: "Disco Sólido SSD Adata 240GB",
      details: '',
      price: 4700,
      stock: 9,
      image: '../images/Disco_Solido_SSD_Kingston_240GB_A400_500MB_s_c9de3151-med.jpg'
    }
  ]

  useEffect(() => {
    const muestraResultado = new Promise((res, rej) => {
      setLoading(true)
      setTimeout(() => {
        res(productos)

      }, 2000);
    })

    muestraResultado
      .then(result => {
        setResultado(result)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error, intente más tarde"}</div>
      <ItemList products={resultado} />

    </>
  )
};

export default ItemListContainer;
