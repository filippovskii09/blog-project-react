import { FC } from 'react';
import AuthForm from './AuthForm';
import AuthButton from './AuthButton';
import AuthWrapper from './AuthWrapper';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignUpFormInputs = {
  username: string;
  email: string;
  password: string;
};

const SignupComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => console.log(data);

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <AuthButton text="Sign Up" />
      </AuthForm>
    </AuthWrapper>
  );
};

export default SignupComponent;
