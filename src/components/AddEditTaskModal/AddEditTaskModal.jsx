import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';

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
        <Form autocompleted="off" className={css.form}>
  
            <Field 
              type="text" 
              name="title" 
              className={css.title_field}
            >
              {(props) => (
                  <>
                    <TextField
                      name={props.field.name}
                      className={css.title}
                      variant="outlined"
                      placeholder={props.field.name}
                      label={props.field.name}
                      {...props.field}
                    />
                  </>
                )}
            </Field>
            <ErrorMessage name="title" component="div"/>

            <Field 
              type="text" 
              multiline
              maxRows={4}
              name="description" 
              className={css.description_field}
            >
              {(props) => (
                    <>
                      <TextField
                        name={props.field.name}
                        className={css.description}
                        variant="outlined"
                        multiline
                        maxRows={4}
                        placeholder={props.field.name}
                        label={props.field.name}
                        {...props.field}
                      />
                    </>
                )}
            </Field>
            <ErrorMessage name="description" component="div"/>
      

          <Button type="submit" variant="contained" color='accent' className={css.button} aria-label="submit">{btntitle}</Button>

        </Form>
      </Formik>
    </div>
  );
};
