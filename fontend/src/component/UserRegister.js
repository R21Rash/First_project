import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './modifies/Register.module.css';
import Swal from 'sweetalert2';


class User {
  constructor(firstname, lastname, gender, email, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.email = email;
    this.password = password;
  }
}

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      gender: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First Name is required'),
      lastname: Yup.string().required('Last Name is required'),
      gender: Yup.string(),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const user = new User(values.firstname, values.lastname, values.gender, values.email, values.password);

        console.log('Sending to backend:', user);

        const response = await axios.post('http://localhost:3000/user/register', user);

        console.log('Backend response:', response.data);

        // Show SweetAlert2 success popup
        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          showConfirmButton: false,
          timer: 1500, // Close after 1.5 seconds
        }).then(() => {
          // Redirect to login page after the timer stops
          window.location.href = '/user/login';
        });

        // Reset the form after successful submission
        resetForm();
      } catch (error) {
        console.error('Backend error:', error.response.data);
        // Handle error, show error message, etc.
      }
    },
  });
  return (
    <div className={styles.body}>
  <div className={styles.registerContainer} >
      <h2 className={styles.hh2}>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className={styles.llabel}>
          First Name:
          <input
            className={styles.iinput}
            type="text"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className={styles.error}>{formik.errors.firstname}</div>
          )}
        </label>
        <br />

        <label className={styles.llabel}>
          Last Name:
          <input
            className={styles.iinput}
            type="text"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <div className={styles.error}>{formik.errors.lastname}</div>
          )}
        </label>
        <br />

        <label className={styles.llabel}>
          Gender:
          <input
            className={styles.iinput}
            type="text"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          />
        </label>
        <br />

        <label className={styles.llabel}>
          Email:
          <input
            className={styles.iinput}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}
        </label>
        <br />

        <label className={styles.llabel}>
          Password:
          <input
            className={styles.iinput}
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </label>

        <br />

        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>

     
    </div>
    </div>
  );
};

export default Register;
