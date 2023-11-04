const express = require('express');
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get('/', (req, res)=>{
  const products =[];
  const{ size }= req.query; // parametros tipo query se recogen de esta manera
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
    });
  }
  res.json([products]);
});


router.get('/filter', (req,res)=>{
  res.send('yo soy un filter');
});


router.get('/:id', (req, res) =>{
  const { id } = req.params;
  if(id==='999'){
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.json({
      id,
      name: 'Product 2',
      price: 2000
  });}

});

router.post('/', (req, res)=> {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
    }
  );
});

router.patch('/:id', (req, res)=> {         //put y patch en teoria funcionan
  const{ id } = req.params;                 //de la misma forma pero patch es para informacion parcial
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
    }
  );
});

router.delete('/:id', (req, res)=> {
  const{ id } =req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
    }
  );
});

module.exports = router;
