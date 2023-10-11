import * as yup from "yup";


let schema = yup.object().shape({
  title: yup.string().required().trim().min(1, 'Title cannot be empty'),
  description: yup.string(),
});


export default schema;
