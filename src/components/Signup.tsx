import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Link } from "react-router-dom";
import * as Yup from "yup";
import {isAuthenticated} from './userAuth';

const Signup: React.FunctionComponent = () => {
  type State = {
    email: string;
    password: string;
    confirmPassword: string;
  };
  type Users = {
    email: string;
    password: string;
  };
  //adding user => localstorage
  const history = useNavigate();
  const [users, setUsers] = useState<Users[]>([{ email: "", password: "" }]);
  const [error, setError] = useState(false);
  const initialValues: State = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("required"),
  });

  useEffect(() => {
    console.log(isAuthenticated());
    if (isAuthenticated()) {
      console.log("Redirecting dashboard....");
      history("/dashboard");
    }
  }, [history]);

  const handleSubmit = (values: State, submittingObject: any) => {
    //add code to add user to the db.
    const newUser = { email: values.email, password: values.password };
    const existingUsers = JSON.parse(localStorage.getItem("users") || '[]');
    let userFound = false
    console.log(existingUsers);
    //get....
    if (existingUsers.length>0) {
      for (let user of existingUsers) {
        if (values.email === user?.email) {
          console.error("User already exists");  
          userFound = true;        
          setError(true);
        }
        //wrong logic: correction required.   
        }
        if(!userFound){
            setError(false);
            setUsers((prevUsers) => [...prevUsers, newUser]);
            localStorage.setItem('users',JSON.stringify(users));
        }
      } 
    submittingObject.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="div" />
              </div>
              <button type="submit">Sign-up</button>
            </Form>
          );
        }}
      </Formik>
      <div>
        <p>
          If already registered <Link to="/">sign-in</Link> here.
        </p>
      </div>
    </div>
  );
};

export default Signup;
