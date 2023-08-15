import Card from './/Component/Card';
import './App.css';
import Banner from './/Component/Banner';
import Navbarnew from ".//Component/navbar";
import React, { useState,useEffect} from 'react';
import Footer from './Component/Footer';
import { data } from './/Component/imgdata';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const[cartValue,setCartValue]=useState(0);
  const[cardItems,setCardItems]=useState([]);

  useEffect(() => {
    setCardItems(data);
  },[]);


 function handleCart(Items){
                        if(Items.added){
                          setCartValue(cartValue+1);
                          let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                          // setCardItems(cardItems)
                      
                                      }
                        else {
                        setCartValue(cartValue-1);
                        let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                        
                              }
                        }

  return (
    <div className="App">
     <Navbarnew cartValue = {cartValue}/>
     <Banner/>
     {cardItems.map(Items =>
     <Card
    
     handleCart={()=>handleCart(Items)}
     key={Items.id}
     value={cartValue}
     items={Items}
     />

     )}
     <Footer/>

    </div>
  );
}

export default App;