import { FC } from 'react';
import { ChildrenPropsType } from '../types/types';
import { cn } from '../utils/utils';

const Container: FC<ChildrenPropsType> = ({ children, className }) => {
  return <div className={cn('px-4', className)}>{children}</div>;
};

export default Container;
