import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues } from "../utils";
import Button from "../../UI/button";
import * as Yup from "yup";
import { PersonalType } from "../../models";

const validationSchema = Yup.object({
  firstName: Yup.string().required("firstName is required !"),
  lastName: Yup.string().required("lastName is Required !"),
  email: Yup.string()
    .email("Is Not Email Format Validate")
    .required("Email is Required !"),
  comments: Yup.string().required("comments is Required !"),
});
const FormikComponents = () => {
  return (
    <Formik
      className="flex justify-center items-center w-full p-5"
      initialValues={initialValues}
      onSubmit={(values: PersonalType) => console.log(values)}
      validationSchema={validationSchema}
    >
      <Form className="rounded-lg shadow-md flex flex-col justify-center items-start w-full border p-2 gap-6">
        <div className="flex flex-col gap-1 w-full">
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="border !w-full"
          />
          <ErrorMessage name="firstName" className="text-red-500" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="border !w-full"
          />
          <ErrorMessage name="lastName" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Field
            type="text"
            id="email"
            name="email"
            className="border !w-full"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Field
            as={"textarea"}
            type="text"
            id="comments"
            name="comments"
            className="border !w-full"
          />
          <ErrorMessage name="comments" />
        </div>
        <div className="flex w-full justify-center items-center">
          <Button
            text="submite"
            type="submit"
            className="bg-blue-700 w-1/4 p-1 rounded-lg text-white"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormikComponents;
