import { FC, FormEvent } from 'react';
import { ChildrenPropsType } from '../../types/types';

type AuthFormPropsType = ChildrenPropsType & {
  onSubmit: (e: FormEvent) => void;
};

const AuthForm: FC<AuthFormPropsType> = ({ children, onSubmit }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="w-full max-w-[425px] mx-auto"
    >
      <div className="flex flex-col gap-3 w-full px-4">{children}</div>
    </form>
  );
};

export default AuthForm;
