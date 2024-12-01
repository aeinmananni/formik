/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form } from "formik";
import { InitailValuesType } from "./models";
import * as Yup from "yup";
import FormikControl from "../custom/formik-control";
import Button from "../../UI/button";

const className = "border py-1 px-2";
const RegisterationForm = () => {
  const options = [
    { label: "phone", value: "phone_moc" },
    { label: "email", value: "email_moc" },
  ];
  const initialValues: InitailValuesType = {
    email: "",
    password: "",
    confirmPassword: "",
    modelContact: "",
    phone: "",
  };

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords Must Match")
      .required("Confirm Password is Required!"),
    modelContact: Yup.string().required("Model Contact is Required!"),
    phone: Yup.string().when("modelContact", {
      is: (val: string) => val === "phone_moc",
      then: (schema) =>
        schema
          .required("Phone is Required!")
          .matches(/^\d{11}$/, "Phone must be exactly 11 digits"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const onSubmite = (values: InitailValuesType) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmite}
    >
      {(_formik) => (
        <Form className="p-2 flex flex-col gap-2">
          <FormikControl
            control="input"
            id="email"
            name="email"
            errorsName="email"
            className={className}
          />
          <FormikControl
            control="input"
            id="password"
            name="password"
            errorsName="password"
            className={className}
          />
          <FormikControl
            control="input"
            id="confirmPassword"
            name="confirmPassword"
            errorsName="confirmPassword"
            className={className}
          />
          <FormikControl
            control="radio"
            id="modelContact"
            name="modelContact"
            errorsName="modelContact"
            options={options}
          />
          <FormikControl
            control="input"
            id="phone"
            name="phone"
            errorsName="phone"
            className={className}
          />
          <Button
            text="submit"
            type="submit"
            disabled={!_formik.isValid && _formik.dirty}
            className={`  rounded-md px-2 py-1 text-white ${
              !_formik.isValid && _formik.dirty
                ? "cursor-not-allowed bg-blue-200"
                : "cursor-pointer bg-blue-500"
            }`}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterationForm;
