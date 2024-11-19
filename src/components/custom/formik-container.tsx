/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../UI/button";
import FormikControl from "./formik-control";

const FormikContainer = () => {
  const initailValues = { firstName: "", exp: "" };
  const validationSchemas = Yup.object({
    firstName: Yup.string().required("Required FirstName!"),
    exp: Yup.string().required("Required Exp"),
  });

  const onSubmite = (values: { firstName: string }) => {
    console.log(values);
  };
  return (
    <Formik
      className="flex justify-center items-center w-full p-5 "
      onSubmit={onSubmite}
      initialValues={initailValues}
      validationSchema={validationSchemas}
    >
      {(_formik) => (
        <Form className="flex flex-col gap-3">
          <FormikControl
            control="input"
            type="text"
            name="firstName"
            label={"FirstName"}
            errorsName="firstName"
            className="border py-1 px-1"
          />
          <FormikControl
            control="textarea"
            type="text"
            name="exp"
            label={"Description"}
            errorsName="exp"
            className="border py-1 px-1"
          />
          <Button
            className="bg-blue-500 text-white py-2 px-1 rounded-md w-1/5"
            type="submit"
            text="submite"
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
