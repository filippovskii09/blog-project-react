import { FC } from 'react';
import { ChildrenPropsType } from '../../types/types';
import { InstagramIcon } from '../icons/InstagramIcon';

const AuthWrapper: FC<ChildrenPropsType> = ({ children }) => {
  return (
    <div className="flex flex-col gap-28 w-full">
      <InstagramIcon className="text-center mx-auto" />
      {children}
    </div>
  );
};

export default AuthWrapper;
