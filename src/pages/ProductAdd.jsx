import React from "react";
import { Formik, Form  } from "formik";
import * as Yup from "yup";
import { Button, } from 'semantic-ui-react'
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  //yup placeholder gibi bir şey koymamızı sağlıyor
  const schema = Yup.object({
    productName: Yup.string().required("ürün adı zorunlu"),
    unitPrice: Yup.number().required("ürün fiyatı zorunlu"),
  });
  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit={(values)=>{
        console.log(values)
      }}>
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="ürün adı" />
            <KodlamaIoTextInput name="unitPrice" placeholder="ürün fiyatı" />
          {/* <FormField>
          <Field name="productName" placeholder="ürün adı"></Field>
          <ErrorMessage name="productName" render={error=>
            <Label pointing basic color="red" content={error}></Label>
          }></ErrorMessage>
          </FormField> */}
          
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
  );
}
