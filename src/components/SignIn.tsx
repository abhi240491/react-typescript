import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';

const Signin: React.FunctionComponent = () =>{
    type State = {
        email: string;
        password: string,
    };

    const initialValues: State = {
        email:"",
        password:"",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email").required("required"),
        password: Yup.string().required("required"),
      });
    const handleSubmit = (values:State,submittingObject:any) => {
      //add authentication code here
        console.log(values);
        submittingObject.resetForm();
      };
      
    return (
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
            {(formik) =>{
                return (
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component='div' />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component='div' />
                    </div>
                    <button type='submit'>Sign-in</button>
                </Form>
                )
            }}
        </Formik>
        <div>
          <p>If not registered <Link to="/signup">signup</Link> here.</p>
        </div>
      </div>
    )}

export default Signin