import { PersonalType } from "../models";

import * as Yup from "yup";

export const initialValues: PersonalType = {
    firstName: "",
    lastName: "",
    email: "",
    comments:"",
    address:"",
    phones:{
        home:"",
        mobile:"",
        office:""
    },
    skills:["",""],
    corses:[""]
  };

 export  const savedValues : PersonalType ={
    firstName: "aein",
    lastName: "mananni",
    email: "aein@gmail.com",
    comments:"",
    address:"babol",
    phones:{
        home:"33146576",
        mobile:"0990444",
        office:"33121265"
    },
    skills:["React js","Node js"],
    corses:["eee"]
  }
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


export const validationSchema = Yup.object({
    firstName: Yup.string().required("firstName is required !"),
    lastName: Yup.string().required("lastName is Required !"),
    email: Yup.string()
      .email("Is Not Email Format Validate")
      .required("Email is Required !"),
    comments: Yup.string().required("comments is Required !"),
    address: Yup.string().required("Adrres is Required !"),
    phones: Yup.object({
      home: Yup.string().required("Home phone is required!"),
      mobile: Yup.string().optional(), // or add validation as needed
      office: Yup.string().optional(), // or add validation as needed
    }),
    skills: Yup.array()
    .of(Yup.string().required("Skill cannot be empty"))
    .min(1, "At least one skill is required!")
  });