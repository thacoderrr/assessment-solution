// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Form, Formik } from 'formik';
import InputField from '../../components/Common/Common';
import Container from '../../components/Landing/Container';
import { Buttons } from '../../components/Common/Buttons';
import { useMutation } from 'react-query';
import userSlice from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinnerComponent from 'react-spinners-components';

const Signup = () => {
    const signup = userSlice(state => state.Signup)
    const navigate = useNavigate()
    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
    };
    const signupMutation = useMutation((data) => signup(data), {
        onSuccess: (data) => {
            if (data.status) {
                navigate('/login')
            }

        },
        onError: (error) => {
            console.log(error)
        }
    })
    const onSubmit = (values, { resetForm, setSubmitting }) => {
        console.log(values);
        if (values.cpassword === values.password) {
            signupMutation.mutate(values)
        }
        setSubmitting();
        resetForm();
    };
    return (
        <Container>
            <div className='flex justify-center items-center w-full h-full'>
                <section className="supportMessage__section-form w-[60%] p-4 border border-solid border-golden">
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({ values, touched, errors, handleChange, submitForm }) => (
                            <Form>
                                <div className="py-2 w-full">
                                    <InputField
                                        name="fname"
                                        type="text"
                                        placeholder={"Enter your first username"}
                                        value={values.fname}
                                        onChange={handleChange}
                                        err={errors.fname && touched.fname}
                                    />
                                </div>
                                <div className="py-2 w-full">
                                    <InputField
                                        name="lname"
                                        type="text"
                                        placeholder={"Enter your last username"}
                                        value={values.lname}
                                        onChange={handleChange}
                                        err={errors.lname && touched.lname}
                                    />
                                </div>
                                <div className="py-2 w-full">
                                    <InputField
                                        name="email"
                                        type="email"
                                        placeholder={"Enter your email"}
                                        value={values.email}
                                        onChange={handleChange}
                                        err={errors.email && touched.email}
                                    />
                                </div>
                                <div className="py-2 w-full">
                                    <InputField
                                        name="password"
                                        type="password"
                                        placeholder={"Enter your password"}
                                        value={values.password}
                                        onChange={handleChange}
                                        err={errors.password && touched.password}
                                    />
                                </div>
                                <div className="py-2 w-full">
                                    <InputField
                                        name="cpassword"
                                        type="password"
                                        placeholder={"Enter your password again"}
                                        value={values.cpassword}
                                        onChange={handleChange}
                                        err={errors.cpassword && touched.cpassword}
                                    />
                                </div>
                                <div className='flex justify-center items-center'>

                                    <div className='mt-5 w-[50%]'>
                                        <Buttons type='btn' color={'secondary'} onClick={(e) => {
                                            submitForm();
                                            e.preventDefault();
                                        }} >
                                            {
                                                signupMutation.isLoading ? <LoadingSpinnerComponent
                                                    type={"Rolling"}
                                                    colors={["#001973", "#E0F2F9"]}
                                                    size={"22px"}
                                                /> : 'Sign up'
                                            }

                                        </Buttons>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </section>
            </div>


        </Container>
    )
}

export default Signup


