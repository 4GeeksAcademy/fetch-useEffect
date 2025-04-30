import { useEffect, useState } from "react";
import ListProduct from "./Home/ListProduct"

//create your first component
const App = () => {

    //al renderizar el componente
    const [products, setProducts] = useState([])

    //la funcion de useEffect se ejecutara cada vez que el componente se renderice
    useEffect(()=>{
        /*fetch("https://fakestoreapi.com/products", {
            method:"GET"
        })
        .then(resp => resp.json())
        .then(data =>{
            // data son los productos de la api
            setProducts(data)
        })
        .catch(error =>{
            console.log(error)
        })*/
            const fetchData = async ()=>{
                //setTimeOut, setInterval --> asincronas
                const resp = await fetch("https://fakestoreapi.com/products", {method:"GET"})
                const data = await resp.json();
                setProducts(data) //se vuelve a renderizar el component
                return data
            }
            fetchData()
            .catch(console.error);

    }, [])

    //[]--> ejecutar el codigo una sola vez al cargar la pagina
    //[id, var2] --> ejecutar el bloque de codigo  cada vez que las variables  cambie
    
    //https://fakestoreapi.com/products


    /*añadir un nuevo usuario
        1.- Creamos un form con los datos del usuario nombre, apellido
        2.- Escuchamos un evento sobre el boton del form -->  guardar los datos del usuario 
        en un useState, que sera un objeto
        3.- Hacer la peticion al servidor enviando los datos del usuario que quierens añadir
    */
        //datos que introdujo el usuario, que deben estar en un useState
    const user = {
            id: 0,
            username: "string",
            email: "string",
            password: "string"
    }

    const addUser =()=>{
        fetch("https://fakestoreapi.com/users",{
            method: "POST",//put, delete
            body : JSON.stringify(user),
            headers:{
                "Content-Type": "application/json",
                "authorization": "token"
            }
        })
    }

    return (
        <div className="text-center">
            
            <h1 className="text-center mt-5">Listado de productos!</h1>

            <button onClick={addUser}>Añadir usuario</button>

            <ListProduct data ={products} title="holis"/>

            
            
        </div>
    );
};

export default App;