import React from "react";
import './products.css';

const Productproducts = ({produtos}) => {

    return(
        <div className="global-prod">
       
        <div className="box-produto">

             <div className="nome-prod">
                <h4>{produtos.nome}</h4>
            </div>

            <div className="img-prod">
                <img src={produtos.link_img} />
            </div>

            <div className="desc-prod">
                <h4>{produtos.desc}</h4>
            </div>

            <div className="price-prod">
               <h4>R$ {produtos.price}</h4>
            </div>
            
            <div className="button-prod">
                <button type="submit" >COMPRAR</button>
            </div>
            
         </div>
        </div>

);

};

export default Productproducts;