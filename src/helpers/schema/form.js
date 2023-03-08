import * as yup from "yup";

const schema = yup
  .object({
    phone_number: yup.string().required().label("Phone Number"),
    password: yup.string().required().label("Password"),
  })
  .required();

export default schema;
