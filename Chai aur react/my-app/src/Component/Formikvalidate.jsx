import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function Formikvalidate() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label for="firstName">firstName</label>
            <Field name="firstName" />
            <br></br>

            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label for="lastName">lastName</label>

            <Field name="lastName" />
            <br></br>

            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label for="email">email</label>

            <Field name="email" type="email" />
            <br></br>

            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br></br>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formikvalidate;
