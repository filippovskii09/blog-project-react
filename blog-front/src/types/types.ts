import { ReactNode } from 'react';

export type ChildrenPropsType = ClassPropsType & {
  children: ReactNode;
};

export type ClassPropsType = {
  className?: string;
};
