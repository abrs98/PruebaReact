import {Product} from './models/Product.js'
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
var numeroConsulta = 0;

var product1= new Product(1,"Coca Cola 355ML",12.0);
var product2= new Product(2,"Coca Cola 100ML",6.0);
var product3= new Product(3,"Coca Cola 600ML",18.0);
var product4= new Product(4,"Coca Cola 1L",25.0);
var product5= new Product(5,"Coca Cola 3L",50.0);

const productsList = [product1,product2,product3,product4,product5]; 
var productsJson = JSON.stringify(productsList);


app.use(cors());

app.get('/',(req,res)=>{
    res.send(productsJson);
    numeroConsulta++;
    console.log("Cliente Solicita Informacion "+numeroConsulta);
    console.log(productsJson);
})

app.listen(port,() => {
    console.log(`Hello World app listenning on port ${port}`)
});