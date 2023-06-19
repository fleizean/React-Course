import React from 'react'
import '../assets/Dashboard.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup" // birden fazla fonksiyon dahil edilmiş Yup. ile erişim sağlanıyor
import { FormField, Button, Label } from "semantic-ui-react"

export default function ProductAdd() {
  const initalValues = { productName: "", unitPrice: 10, unitsInStock: 5, quantityPerUnit: "", productImage: "", categoryName: "none" }
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"), // metinsel ve zorunlu alan
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    unitsInStock: Yup.number().required("Ürün stok sayısı zorunlu"),
    quantityPerUnit: Yup.string().required("Ürün stok durumu zorunlu"),
    categoryName: Yup.string().required("Ürün kategori ismi zorunlu"),
    productImage: Yup.string().required("Ürün resimi zorunlu")
  })

  return (

    <Formik
      initialValues={initalValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <div className="container">
        <div className="card">
          <Form className="ui form">
            <FormField>
              <Field name="productName" placeholder="Ürün adı" />
              <ErrorMessage name="productName" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            <FormField>
              <Field name="unitPrice" placeholder="Ürün fiyatı" />
              <ErrorMessage name="unitPrice" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            <FormField>
              <Field name="unitsInStock" placeholder="Ürün stoğu" />
              <ErrorMessage name="unitsInStock" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            <FormField>
              <Field name="quantityPerUnit" placeholder="Ürün durumu" />
              <ErrorMessage name="quantityPerUnit" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            <FormField>
              <Field name="productImage" placeholder="Ürün resimi" />
              <ErrorMessage name="productImage" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            {/* <FormField>
              <input
                type="file"
                id="productImage"
                name="productImage"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  formik.setFieldValue('productImage', file);
                }}
              />
            </FormField> */}
            <FormField>
              <Field name="categoryName" placeholder="Ürün kategorisi" />
              <ErrorMessage name="categoryName" render={error =>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
            </FormField>
            <Button color="green" type="submit">
              Ekle
            </Button>
          </Form>
        </div>
      </div>
    </Formik>

  )
}
