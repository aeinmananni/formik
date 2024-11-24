/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../UI/button";
import FormikControl from "./formik-control";

const FormikContainer = () => {
  const dropDownOptions: { label: string; value: string | number }[] = [
    { label: "Select an options", value: "" },
    { label: "Option 1", value: "Option1" },
    { label: "Option 2", value: "Option2" },
    { label: "Option 3", value: "Option3" },
  ];

  const radioOptions: { label: string; value: string | number }[] = [
    { label: "Option1", value: "ROption1" },
    { label: "Option2", value: "ROption2" },
    { label: "Option3", value: "ROption3" },
    { label: "Option4", value: "ROption4" },
  ];
  const initailValues = { firstName: "", exp: "", select: "", radio: "" };
  const validationSchemas = Yup.object({
    firstName: Yup.string().required("Required FirstName!"),
    exp: Yup.string().required("Required Exp"),
    select: Yup.string().required("Required Select"),
    radio: Yup.string().required("Required radio"),
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
          <FormikControl
            control="select"
            type="text"
            name="select"
            label={"Select as topic"}
            errorsName="select"
            options={dropDownOptions}
            className="border py-1 px-1"
          />
          <FormikControl
            control="radio"
            type="radio"
            name="radio"
            label={"radio as topic"}
            errorsName="radio"
            options={radioOptions}
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
