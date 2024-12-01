/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LoginFormType } from "../../models";
import FormikControl from "../custom/formik-control";
import Button from "../../UI/button";

const LoginFrom = () => {
  const initailValues: LoginFormType = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format !")
      .required("email is Required !"),
    password: Yup.string().required("password is Required !"),
  });

  const onSubmite = (values: LoginFormType) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initailValues}
      validationSchema={validationSchema}
      onSubmit={onSubmite}
    >
      {(_formik) => (
        <Form className="flex flex-col gap-3 p-2">
          <FormikControl
            control="input"
            id="email"
            name="email"
            type="email"
            errorsName="email"
            label="Email"
            placeholder="Enter your email"
            className="border text-sm py-1 px-2 rounded-md"
          />
          <FormikControl
            control="input"
            id="password"
            name="password"
            type="password"
            errorsName="password"
            label="Password"
            placeholder="Enter your password"
            className="border text-sm py-1 px-2 rounded-md"
          />
          <Button
            text="Submit"
            type="submit"
            className="bg-blue-600 text-white px-2 py-1"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginFrom;
