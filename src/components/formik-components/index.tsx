import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import { initialValues, validationSchema } from "../utils";
import Button from "../../UI/button";

import { PersonalType } from "../../models";
import Input from "../../UI/input";

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
            placeholder="firstName"
            className="border !w-full"
          />
          <ErrorMessage
            name="firstName"
            className="text-red-500"
            component={"small"}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Field
            placeholder="lastName"
            type="text"
            id="lastName"
            name="lastName"
            className="border !w-full"
          />
          <ErrorMessage
            className="text-red-500"
            name="lastName"
            component={"small"}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Field
            placeholder="email"
            type="text"
            id="email"
            name="email"
            className="border !w-full"
          />
          <ErrorMessage
            className="text-red-500 text-xs"
            name="email"
            component={"small"}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Field
            placeholder="comments"
            as={"textarea"}
            type="text"
            id="comments"
            name="comments"
            className="border !w-full"
          />

          <ErrorMessage
            className="text-red-500"
            name="comments"
            component="small"
          />
        </div>

        {/* Let's make a customized ponnet */}

        <div className="flex flex-col gap-1 w-full">
          <Field type="text" name="address" className="border !w-full">
            {(props: FieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="address"
                  className="border "
                  placeholder="address"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </Field>
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
