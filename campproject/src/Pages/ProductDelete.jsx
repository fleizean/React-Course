import React, { useState } from 'react';
import '../assets/Dashboard.css';
import { Formik, Form } from 'formik';
import { Button } from "semantic-ui-react";
import axios from "axios";
import TrendyolTextInput from "../utilities/customFormControls/TrendyolTextInput";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDelete() {
  const [productId, setProductId] = useState(""); // State to hold the product ID

  const handleSubmit = async () => {
    try {
      await axios.delete(`https://localhost:23578/api/Products?id=${productId}`);
      toast.success("Ürün başarılı şekilde silindi!");
    } catch (error) {
      toast.error("Ürün silinirken bir sıkıntı oluştu!");
    }
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="card">
          <Form className="ui form">
            <TrendyolTextInput
              name="productId"
              placeholder="Ürün ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <Button color="red" type="submit">
              Sil
            </Button>
          </Form>
        </div>
        <ToastContainer position='bottom-right' />
      </div>
    </Formik>
  );
}
