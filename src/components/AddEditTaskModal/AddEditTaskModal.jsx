import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

import schema from "schemas/addEditTaskSchema";
import  css  from "./AddEditTaskModal.module.css";



export default function AddEditTaskModal({handleSubmit, initialValues, btntitle}) {

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
        <Form autocompleted="off">

          <Field type="text" name="title">
            {(props) => (
                <>
                  <TextField
                    name={props.field.name}
                    variant="outlined"
                    placeholder={props.field.name}
                    label={props.field.name}
                    {...props.field}
                  />
                </>
              )}
          </Field>
          <ErrorMessage name="title" component="div"/>

          <Field type="text" name="description">
          {(props) => (
                <>
                  <TextField
                    name={props.field.name}
                    variant="outlined"
                    placeholder={props.field.name}
                    label={props.field.name}
                    {...props.field}
                  />
                </>
            )}
          </Field>
          <ErrorMessage name="description" component="div"/>

          <button type="submit">{btntitle}</button>

        </Form>
      </Formik>
    </div>
  );
};
