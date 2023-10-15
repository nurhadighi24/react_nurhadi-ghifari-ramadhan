import axiosWithConfig from "../axiosWithConfig";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/");

    return response.data;
  } catch (error) {
    throw Error("Failed to get product");
  }
};

export const getDetailProducts = async (id_product) => {
  try {
    const response = await axiosWithConfig.get("/" + id_product);

    return response.data;
  } catch (error) {
    throw Error("Failed to get product");
  }
};

export const createProduct = async (data) => {
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };

    const response = await axiosWithConfig.post("/", newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to create a new product");
  }
};

export const updateProduct = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.put(`/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to update product");
  }
};

export const deleteProduct = async (id_product) => {
  try {
    const response = await axiosWithConfig.delete(`/${id_product}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to delete product");
  }
};
