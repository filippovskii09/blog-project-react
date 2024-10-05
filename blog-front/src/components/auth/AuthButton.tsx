import { FC } from 'react';
import { cn } from '../../utils/utils';
import { ClassPropsType } from '../../types/types';

type AuthButtonPropsType = ClassPropsType & {
  text: string;
};

const AuthButton: FC<AuthButtonPropsType> = ({ text, className }) => {
  return (
    <button
      type="submit"
      className={cn(
        'w-full max-w-[425px] mx-auto min-h-[51px] text-center p-4 bg-[#0070FA] hover:bg-[#0070FA] rounded-full flex items-center justify-center text-white font-medium',
        className
      )}
    >
      {text}
    </button>
  );
};

export default AuthButton;
