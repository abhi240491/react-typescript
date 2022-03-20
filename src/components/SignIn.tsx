import React, { useState, useEffect }
from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import {isAuthenticated, setAuthentication} from './userAuth';
const Signin: React.FunctionComponent = () =>{
    type State = {
        email: string;
        password: string,
    };
//isAuthenticated?.... authenticate...redirect.
    const initialValues: State = {
        email:"",
        password:"",
    }
    let history = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email").required("required"),
        password: Yup.string().required("required"),
      });

      useEffect(() => {
        console.log(isAuthenticated());
        if (isAuthenticated()) {
          console.log("Redirecting dashboard....");
          history("/dashboard");
        }
      }, [history]);
      
    const handleSubmit = (values:State,submittingObject:any) => {
      //add authentication code here
        const users = JSON.parse(localStorage.getItem("users") || '[]');
        if (users.length>0) {
          let userFound = false;
          for (let user of users) {
            if (values.email === user?.email) {
              userFound=true;
              console.log("Email Id matched");          
              if(values.password===user?.password) {
                setAuthentication(true)
                history("/dashboard");
              } else {
                console.log("Wrong Password")
                //setAuthentication(false)
              }
            }
          }
          if(!userFound){
            console.log("User not found Please Signup");
          }
        }
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