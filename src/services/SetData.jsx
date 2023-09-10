import { GetCartItemsFromLocalStorage } from "./GetData";

const SetSessionKeyToLocalStorage = (sessionKey) =>{
    localStorage.setItem("sessionKey", sessionKey);
}   

const SetRegister = (post) =>{
    const url = "http://localhost/topstyle/server/api.php";

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

const SetOrder = (sessionKey, productIds) =>{
  const url = "http://localhost/topstyle/server/api.php";
  const post = {"action":"order", "sessionkey":sessionKey, "products":productIds};
  console.log(post);
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

const RemoveSessionKeyFromLocalStorage = () =>{
  localStorage.removeItem("sessionKey");
}


const AddCartItemTolocalStorage = (item) =>{

  let cartItems = GetCartItemsFromLocalStorage();

  if(cartItems === null)
  {
    let list = {"products":[item]};
    localStorage.setItem("cart", JSON.stringify(list));
    return;
  }

  cartItems = JSON.parse(cartItems);

  cartItems.products.push(item);

  localStorage.setItem("cart",JSON.stringify(cartItems));
}

const RemoveCartItemFromLocalStorage = (item) =>{
  let cartItems = GetCartItemsFromLocalStorage();

  if(cartItems === null)
    return;

  let products = JSON.parse(cartItems).products;

  let removed = false;

  let filteredList = [];
  for(let i = 0; i < products.length; i++)
  {
    if(item.productId === products[i].productId)
    {
      if(removed === false)
      {
        removed = true;
        continue;
      }
    }

    filteredList.push(products[i]);
  }

  if(filteredList.length === 0)
  {
    RemoveCartFromLocalStorage();
    return;
  }

  let list = {"products":filteredList};
  localStorage.setItem("cart", JSON.stringify(list));

}

const RemoveCartFromLocalStorage = () =>{
  localStorage.removeItem("cart");
}

export {SetSessionKeyToLocalStorage, SetRegister, RemoveSessionKeyFromLocalStorage, AddCartItemTolocalStorage, RemoveCartFromLocalStorage, RemoveCartItemFromLocalStorage, SetOrder};