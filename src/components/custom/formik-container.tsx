import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../UI/button";
import FormikControl from "./formik-control";

const FormikContainer = () => {
  const initailValues = { firstName: "" };
  const validationSchemas = Yup.object({
    firstName: Yup.string().required("Required !"),
  });

  const onSubmite = (values: { firstName: string }) => {
    console.log(values);
  };
  return (
    <Formik
      className="flex justify-center items-center w-full p-5"
      onSubmit={onSubmite}
      initialValues={initailValues}
      validationSchema={validationSchemas}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="text"
            name="firstName"
            label={"FirstName"}
            errorsName="firstName"
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
