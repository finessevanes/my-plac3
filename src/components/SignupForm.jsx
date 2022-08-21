import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
  handle: yup
    .string('Enter your handle')
    .required('handle is required'),
  uri: yup
    .string('Enter your profile picture uri')
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      handle: '',
      uri: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('submit')
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="handle"
          name="handle"
          label="Handle"
          value={formik.values.handle}
          onChange={formik.handleChange}
          error={formik.touched.handle && Boolean(formik.errors.handle)}
          helperText={formik.touched.handle && formik.errors.handle}
        />
        <TextField
          fullWidth
          id="uri"
          name="uri"
          label="Profile Picture URI"
          type="uri"
          value={formik.values.uri}
          onChange={formik.handleChange}
          error={formik.touched.uri && Boolean(formik.errors.uri)}
          helperText={formik.touched.uri && formik.errors.uri}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;