import Input from "../../UI/input";
import Button from "../../UI/button";
import { useFormik } from "formik";
import { PersonalType } from "../../models";
import { initialValues, validate } from "../utils";

const PersonalForm = () => {
  const formik = useFormik<PersonalType>({
    initialValues,
    onSubmit: (data: PersonalType) => {
      console.log(data);
      formik.resetForm();
    },
    validate,
  });
  const className = "border w-full  rounded-lg p-1";

  return (
    <div className="flex justify-center items-center w-full p-5">
      <form className="rounded-lg shadow-md flex flex-col justify-center items-start w-1/2 border p-2 gap-6">
        <Input
          lable="firstName"
          name="firstName"
          onChange={formik.handleChange}
          className={className}
          value={formik.values.firstName}
          errorMessage={formik.errors.firstName && formik.errors.firstName}
        />
        <Input
          lable="lastName"
          name="lastName"
          onChange={formik.handleChange}
          className={className}
          value={formik.values.lastName}
          errorMessage={formik.errors.lastName && formik.errors.lastName}
        />
        <Input
          lable="email"
          name="email"
          onChange={formik.handleChange}
          className={className}
          value={formik.values.email}
          errorMessage={formik.errors.email && formik.errors.email}
        />
        <div className="flex w-full justify-center items-center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            text="submite"
            className="bg-blue-700 w-1/4 p-1 rounded-lg text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
