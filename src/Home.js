import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product 
          id="12321341"
          title="The Lean startup: How Constant Innovation Creates Radically Successfull Bussiness Paperback "
          price={5.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={4}/>
          <Product  
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, with K-beater, Dough Hook and 5 Litre Glass Bowl"
          price={239.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={5}/>
        </div>

        <div className="home__row">
        <Product 
          id="4903850"
          title="New Apple ipad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
           <Product 
          id="23445930"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
          id="3254354345"
          title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price={598.99}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilelex25"
          />
          
        </div>

        <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={1094.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>    
    </div>
  );
}

export default Home;

