import { PersonalType } from "../models";

export const initialValues: PersonalType = {
    firstName: "",
    lastName: "",
    email: "",
  };
  export const validate = (values: PersonalType) => {
    let errors: PersonalType | object = {};
    if (!values.firstName) {
      errors = { ...errors, firstName: "Required" };
    }
    if (!values.lastName) {
      errors = { ...errors, lastName: "Required" };
    }
    if (!values.email) {
      errors = { ...errors, email: "Required" };
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      errors = { ...errors, email: "Invalid email format" };
    }
    return errors;
  };