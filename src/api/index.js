import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api");
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllPlants() {
  try {
    const { data } = await axios.get("/api/plants");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(body) {
  try {
    const { data } = await axios.post("/api/users/login", body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserCart(username) {
  try {
    const { data } = await axios.get(`/api/cart/${username}`);
    console.log("SRC API CALL - getUserCart/Data", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addToUserCart(body) {
  try {
    const { data } = await axios.post("/api/cart/user-cart", body);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function registerUser(body) {
  try {
    const { data } = await axios.post("/api/users/register", body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const res = await axios.get("/api/users/me");
    console.log("API getUserInfo", res);
  } catch (error) {
    throw error;
  }
}

export async function createProduct(name, description, price,type, image_url) {
 

 console.log(name, description, price, type,image_url)
  try {
    const { data } = await axios.post("/api/plants", {
      name,
      description,
      price,
      type,
      image_url,
    });
    
    alert("Plants successfully added");
    console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}
export async function addItemToCart(plant_id, quantity, token) {
  try {
    const { data } = await axios.post(
      `api/cart`,
      { plant_id, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error("Error adding to cart");
  }
}

export async function getPlantByName(name) {
  console.log("IN srcAPI", name);
  try {
    const { data } = await axios.get(`/api/plants/${name}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addOrder(total_price, status) {
  try {
    const { data } = await axios.post("/api/orders", {
      total_price,
      status,
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getAllOrders() {
  try{
  const { data } = await axios.get("api/orders");
  return data;
  }catch(error){
    throw error
  }
  
  
}
export async function updateOrderStatus(id, status) {
 try{ 
   const updatedOrder = await axios.patch(`/api/orders/${id}/status`, {status: status });

  return updatedOrder;
}catch(error){
  throw error;
}
}
