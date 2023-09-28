// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Form, Formik } from 'formik';
import InputField from '../../components/Common/Common';
import Container from '../../components/Landing/Container';
import { Buttons } from '../../components/Common/Buttons';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import userSlice from '../../store/userStore';
import LoadingSpinnerComponent from 'react-spinners-components';

const Login = () => {
  const login = userSlice(state => state.login);
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };
  const loginMutation = useMutation(data => login(data), {
    onSuccess: (data) => {
      if (data.status) {
        navigate('/dashboard')
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    loginMutation.mutate(values)
    setSubmitting();
    resetForm();
  };
  return (
    <Container>
      <div className='flex  flex-col justify-center items-center w-full h-full'>

        <section className="supportMessage__section-form w-[60%] p-4 border border-solid border-golden">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, touched, errors, handleChange, submitForm }) => (
              <Form>
                <div className="py-4 w-full">
                  <InputField
                    name="email"
                    type="email"
                    placeholder={"Enter your email"}
                    value={values.email}
                    onChange={handleChange}
                    err={errors.email && touched.email}
                  />
                </div>
                <div className="py-4 w-full">
                  <InputField
                    name="password"
                    type="password"
                    placeholder={"Enter your password"}
                    value={values.password}
                    onChange={handleChange}
                    err={errors.password && touched.password}
                  />
                </div>
                <div className='flex justify-center items-center'>

                  <div className='mt-5 w-[50%]'>
                    <Buttons type='btn' color={'secondary'} onClick={(e) => {
                      submitForm();
                      e.preventDefault()
                    }} >
                      {
                        loginMutation.isLoading ? <LoadingSpinnerComponent
                          type={"Rolling"}
                          colors={["#001973", "#E0F2F9"]}
                          size={"22px"}
                        /> : 'Login'
                      }
                    </Buttons>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>

        <header className='flex justify-end items-end py-5'>
          <p className='p4 '>Are you new? <span className='cursor-pointer' onClick={() => navigate('/signup')}>Sign up</span></p>
        </header>
      </div>


    </Container>
  )
}

export default Login


