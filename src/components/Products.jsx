
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Products=()=>{

     const [list,setList]=useState([]);
     useEffect(()=>{
        
axios.get("https://fakestoreapi.com/products").then(res=>{
    var out=res.data;
    console.log(out);
    return out;
}).then((out)=>{
    setList(out)    
})
     },[])
    return (
          <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%",marginLeft:"20%",gap:"2%"}}>
               {list.map((item,index)=>
        
                    {
                        return (
                            
                                <div key={index} style={{border:"1px solid red",alignItems:"center"}}>
                                <h4>{item.category}</h4>
                                <h5>{item.title}</h5>
                                <img src={item.image} height="200vw" width="200vh"/>
                                <small>Rating: {item.rating.rate}</small>
                                <p>{item.description}</p>
                                </div>


                                    
                                
                        
                        )
                    }
                
               )}

          </div>
        )
    
}
export default Products;