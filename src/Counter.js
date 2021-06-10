import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(4);
  const [carrito, setCarrito] = useState(0);
  
  const [state, setState] = useState({
  	count: 0,
  	stock: 4,
  	carrito: 0
    });
    
  
  return (
    <div className="Counter">
     
     <button onClick={() => count>0 ? setCount(count - 1) : setCount(count)}> -1</button>
     <button onClick={() => setCount(count + 1)}>+1</button>
     <p>Agregar {count} al carrito</p>
     <button onClick={() => stock>0 && stock>=count ? setStock(stock - count) : setStock(stock) }>Agregar</button>
     <p>Stock: quedan {stock} unidades</p>
    </div>
  );
}

export default Counter;
