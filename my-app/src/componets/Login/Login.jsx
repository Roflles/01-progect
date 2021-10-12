import React from "react";
import {useForm} from "react-hook-form";
import {minLengthCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-Reducer";
import {Redirect} from "react-router-dom";

const minLength = minLengthCreator(5);


const LoginForm = ({onSubmit, error}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <label htmlFor="email"/>
                    <input
                        id="email"
                        {...register("email", {
                            required: "required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                        type="email"
                        placeholder={'Email'}
                    />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password"/>
                    <input
                        id="password"
                        {...register("password", {

                            validate: {required, minLength}
                        })}
                        type="password"
                        placeholder={'Password'}
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}
                </div>
                <div>
                    <label htmlFor="checkbox"/>
                    <input {...register("rememberMe")}
                           type={"checkbox"}/> remember me
                </div>
                { error && <div>
                    {error}
                </div>
                }
                <div>
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} error={props.error}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
   error: state.auth.error
})

export default connect(mapStateToProps, {login})(Login);