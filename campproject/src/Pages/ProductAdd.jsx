import React from 'react';
import '../assets/Dashboard.css';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import TrendyolTextInput from "../utilities/customFormControls/TrendyolTextInput";
import axios from "axios";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 10,
    unitsInStock: 5,
    quantityPerUnit: "",
    productImage: "",
    categoryName: "none"
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    unitsInStock: Yup.number().required("Ürün stok sayısı zorunlu"),
    quantityPerUnit: Yup.string().required("Ürün stok durumu zorunlu"),
    categoryName: Yup.string().required("Ürün kategori ismi zorunlu"),
    productImage: Yup.string().required("Ürün resimi zorunlu")
  });

  const handleSubmit = async (values) => {
    try {
      await axios.post("https://localhost:23578/api/Products", values);
      console.log("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="card">
          <Form className="ui form">
            <TrendyolTextInput name="productName" placeholder="Ürün adı" />
            <TrendyolTextInput name="unitPrice" placeholder="Ürün fiyatı" />
            <TrendyolTextInput name="unitsInStock" placeholder="Ürün adeti" />
            <TrendyolTextInput name="quantityPerUnit" placeholder="Ürün bilgisi" />
            <TrendyolTextInput name="productImage" placeholder="Ürün resimi" />
            <TrendyolTextInput name="categoryName" placeholder="Kategori adı" />
            <Button color="green" type="submit">
              Ekle
            </Button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}