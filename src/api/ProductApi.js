import api from "./index";

const getAllProduct = async () => {
  try {
    const res = await api.get("/product/all");
    return res.data.products;
  } catch (error) {
    return error;
  }
};
const getAllProductSelling = async () => {
  try {
    const res = await api.get("/product/all/selling");
    return res.data.products;
  } catch (error) {
    return error;
  }
};

const getProductById = async (id) => {
  try {
    const res = await api.get(`/product/detail/${id}`);
    console.log(res);
    return res.data.product;
  } catch (error) {
    return error;
  }
};
const getAllProductByQuery = async (getGender, getCat, getStatus) => {
  try {
    const url = `/product/all?gender=${getGender || ""}&cat=${
      getCat || ""
    }&status=${getStatus || ""}`;
    const res = await api.get(url);
    return res.data.products;
  } catch (error) {
    return error;
  }
};
const createProduct = async ({
  images,
  name,
  category,
  status,
  gender,
  price,
  sizes,
  detail,
}) => {
  console.log("create product ");
  try {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("gender", gender);
    formData.append("price", price);
    formData.append("detail", detail);
    images?.map(({ originFileObj }) => {
      formData.append("images", originFileObj);
      return 0;
    });
    formData.append("sizes", JSON.stringify(sizes));

    const res = await api.post("/product/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
const editProduct = async (
  { images, name, category, status, gender, price, sizes, detail },
  imagesRemove,
  id
) => {
  // console.log(images);
  try {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("gender", gender);
    formData.append("price", price);
    formData.append("detail", detail);

    images?.map(({ originFileObj }) => {
      if (originFileObj) formData.append("images", originFileObj);
      return 0;
    });
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("imagesRemove", JSON.stringify(imagesRemove));
    const res = await api.post(`/product/edit/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export {
  getAllProduct,
  getProductById,
  getAllProductByQuery,
  createProduct,
  editProduct,
  getAllProductSelling,
};
