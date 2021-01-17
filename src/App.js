import Bannerbanner from "./Components/Banner/banner";
import Titletitle from "./Components/Title/title";
import Productproducts from "./Components/Products/products";
import React from "react";

const App = () => {

    const banners = {
        "id": 1,
        "link" : "https://www.ablec.com.br/wp-content/uploads/2017/04/capa-site-1.png"
    };

      const title = {
        "id": 1,
        "titulo" : "Produtos"
    };
       const produtos = {
        "id": 1,
        "nome": "Nome",
        "link_img" : "https://a-static.mlcdn.com.br/210x210/guarda-roupa-casal-com-espelho-3-portas-2-gavetas-istambul-espresso-moveis-branco/madeiramadeira-openapi/545842/f0c97fead58dce9caeab5ed7f1dc0072.jpg",
        "desc" : "Desc",
        "price" : 100
    };

  return (
    <div className="App">
        <Bannerbanner banners={banners} />
        <Titletitle title={title}/>
        <Productproducts produtos = {produtos}/>
    </div>
  );
}

export default App;
