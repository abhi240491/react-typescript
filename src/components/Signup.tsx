import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';

const Signup: React.FunctionComponent = () =>{
    type State = {
        email: string;
        password: string;
        confirmPassword: string;
    };

    const initialValues: State = {
        email:"",
        password:"",
        confirmPassword:"",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email").required("required"),
        password: Yup.string().required("required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required("required")
      });

    const handleSubmit = (values:State,submittingObject:any) => {
        //add code to add user to the db.
        console.log(values);
        submittingObject.resetForm();
      };
      
    return (
    <div><Formik
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
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <Field type="password" name="confirmPassword"/>
                        <ErrorMessage name="confirmPassword" component='div' />
                    </div>
                    <button type='submit'>Sign-up</button>
                </Form>
                )
            }}
        </Formik>
        <div>
            <p>If already registered <Link to='/'>sign-in</Link> here.</p>
        </div>
        </div>
    )
}

export default Signup