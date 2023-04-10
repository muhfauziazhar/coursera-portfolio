import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactMe = () => {
  const input = {
    name: '',
    email: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: input,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(`Thank you for your message, ${values.name}! Your message: ${values.message}`);
      resetForm({ values: '' });
    },
  });
  return (
    <div id="contacts" className="h-screen bg-cyan-900 text-white flex flex-col justify-center items-center">
      <h1 className="mb-10 text-4xl">Contact me</h1>
      <div className="flex flex-col w-4/5 md:w-full max-w-lg px-4 py-8 bg-cyan-600 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="flex flex-col mb-6">
            <div>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                type="text"
                className={
                  formik.errors.name && formik.touched.name
                    ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                    : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent'
                }
                placeholder="Your name"
              />
            </div>
            {formik.errors.name && formik.touched.name ? <p className="text-red-500">{formik.errors.name}</p> : null}
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative ">
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                type="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                    : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent'
                }
                placeholder="Your email"
              />
            </div>
            {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative ">
              <textarea
                onChange={formik.handleChange}
                value={formik.values.message}
                name="message"
                type="text"
                className={
                  formik.errors.message && formik.touched.message
                    ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                    : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent'
                }
                placeholder="Your message"
                rows={4}
              />
            </div>
            {formik.errors.message && formik.touched.message ? <p className="text-red-500">{formik.errors.message}</p> : null}
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4  bg-cyan-800 hover:scale-110  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
