import axios from "axios"

export default class ProductService {
    getProducts() {
        return axios.get('https://localhost:23578/api/Products')
    }
    getProductById(productId) {
        return axios.get(`https://localhost:23578/api/Products/${productId}`)
    }
    getCategories() {
        return axios.get(`https://localhost:23578/api/Products/categories`)
    }
}