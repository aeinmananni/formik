import Input from "../../UI/input";
import Button from "../../UI/button";
import { useFormik } from "formik";
import { PersonalType } from "../../models";
import { initialValues, validationSchema } from "../utils";

const PersonalForm = () => {
  const formik = useFormik<PersonalType>({
    initialValues,
    onSubmit: (data: PersonalType) => {
      console.log(data);
      formik.resetForm();
    },
    validationSchema,
  });
  const className = "border w-full  rounded-lg p-1";

  return (
    <div className="flex justify-center items-center w-full p-5">
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg shadow-md flex flex-col justify-center items-start w-1/2 border p-2 gap-6"
      >
        <Input
          lable="firstName"
          className={className}
          {...formik.getFieldProps("firstName")}
          errorMessage={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ""
          }
        />
        <Input
          lable="lastName"
          className={className}
          errorMessage={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ""
          }
          {...formik.getFieldProps("lastName")}
        />
        <Input
          lable="email"
          {...formik.getFieldProps("email")}
          className={className}
          errorMessage={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
        />
        <div className="flex w-full justify-center items-center">
          <Button
            text="submite"
            className="bg-blue-700 w-1/4 p-1 rounded-lg text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
