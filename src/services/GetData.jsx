import { CreateMd5 } from "./Helper";

const GetProducts = (count) =>{

    const url = "http://localhost/topstyle/server/api.php";
    const post = {"action":"product", "count": count};

    return fetch(url, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify(post)
      })
      .then( (response) => response.json());
}

const GetProductsSearch = (condition, category) =>
{
    const url = "http://localhost/topstyle/server/api.php";
    const post = {"action":"search", "condition":condition, "category":category, "count":0, "index":0};

    return fetch(url, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify(post)
      })
      .then( (response) => response.json());
}

const GetProductById = (productId) =>
{
    const url = "http://localhost/topstyle/server/api.php";
    const post = {"action":"product", "productid":productId};

    return fetch(url, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify(post)
      })
      .then( (response) => response.json());
}

const GetSessionKeyFromLocalStorage = () =>{
  return localStorage.getItem("sessionKey");
}

const LoginBySessionKey = (sessionKey) =>
{
  const url = "http://localhost/topstyle/server/api.php";
  const post = {"action":"login", "sessionkey":sessionKey};

  return fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    body: JSON.stringify(post)
  })
  .then( (response) => response.json());
}

const LoginByCredentials = (email, password) =>{
  password = CreateMd5(password);
  
  const url = "http://localhost/topstyle/server/api.php";
  const post = {"action":"login", "email":email, "password":password};
  
  return fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    body: JSON.stringify(post)
  })
  .then( (response) => response.json());

}

const GetProfile = (sessionKey) =>{

  const url = "http://localhost/topstyle/server/api.php";
  const post = {"action":"profile", "sessionkey":sessionKey};

  return fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    body: JSON.stringify(post)
  })
  .then( (response) => response.json());

}

const GetCartItemsFromLocalStorage = () =>{
  return localStorage.getItem("cart");
}




export {GetProducts, GetProductsSearch, GetProductById, LoginByCredentials, GetSessionKeyFromLocalStorage, LoginBySessionKey, GetProfile, GetCartItemsFromLocalStorage };