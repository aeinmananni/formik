import {
  Formik,
  Form,
  ErrorMessage,
  FieldArray,
  FieldArrayRenderProps,
  FastFieldProps,
  FastField,
} from "formik";
import { initialValues, validationSchema } from "../utils";
import Button from "../../UI/button";

import { PersonalType } from "../../models";
import Input from "../../UI/input";

const FormikComponents = () => {
  return (
    <Formik
      className="flex justify-center items-center w-full p-5"
      onSubmit={(values: PersonalType) => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="rounded-lg shadow-md flex flex-col justify-center items-start w-full border p-2 gap-6">
        <div className="flex flex-col gap-1 w-full">
          <FastField
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
          <FastField
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
          <FastField
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
          <FastField
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
          <FastField type="text" name="address" className="border !w-full">
            {(props: FastFieldProps) => {
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
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FastField type="text" name="phones.home" className="border !w-full">
            {(props: FastFieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="phones.home"
                  className="border "
                  placeholder="home"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FastField
            type="text"
            name="phones.mobile"
            className="border !w-full"
          >
            {(props: FastFieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="phones.mobile"
                  className="border "
                  placeholder="mobile"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FastField
            type="text"
            name="phones.office"
            className="border !w-full"
          >
            {(props: FastFieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="phones.office"
                  className="border "
                  placeholder="office"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FastField type="text" name="skills[0]" className="border !w-full">
            {(props: FastFieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="skills1"
                  className="border "
                  placeholder="skills1"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FastField type="text" name="skills[1]" className="border !w-full">
            {(props: FastFieldProps) => {
              const { meta, field } = props;

              return (
                <Input
                  type="text"
                  id="skills2"
                  className="border "
                  placeholder="skills2"
                  errorMessage={meta.touched && meta.error ? meta.error : ""}
                  {...field}
                />
              );
            }}
          </FastField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <FieldArray name="corses">
            {(props: FieldArrayRenderProps) => {
              const { push, remove, form } = props;
              const { values } = form;
              const { corses } = values;
              console.log("Form Errors : ", form.errors);
              return (
                <div className="flex flex-col gap-4">
                  {corses.map((_corse: string, index: number) => (
                    <div key={index} className="flex  gap-4 w-full ">
                      <FastField
                        type="text"
                        name={`corses[${index}]`}
                        className="border !w-full"
                      />
                      {index > 0 && (
                        <Button
                          type="button"
                          className="bg-red-500 p-3"
                          onClick={() => remove(index)}
                          text="-"
                        />
                      )}

                      <Button
                        type="button"
                        className="bg-green-500 p-3"
                        onClick={() => push("")}
                        text="+"
                      />
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <div className="flex w-full justify-center items-center">
          <Button
            text="submit"
            type="submit"
            className="bg-blue-700 w-1/4 p-1 rounded-lg text-white"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormikComponents;
