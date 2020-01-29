import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import { Project } from "../../models";
import { DataStore } from "@aws-amplify/datastore";
import { Auth } from "aws-amplify";

const CreateProject = () => {
  const [accountId, setAccountId] = useState<string>();

  useEffect(() => {
    (async () => {
      setAccountId((await Auth.currentAuthenticatedUser()).getUsername());
    })();
  }, []);

  return accountId ? (
    <Formik
      initialValues={{ title: "" }}
      validate={values => {
        const errors: { title?: string } = {};
        if (!values.title) {
          errors.title = "Required";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await DataStore.save(new Project(values));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  ) : null;
};

export default CreateProject;
