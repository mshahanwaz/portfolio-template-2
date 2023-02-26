import React, { ReactNode } from 'react';

export default function Button({ children }: Props) {
  return <button className="p-4 bg-black text-white">{children}</button>;
}

type Props = {
  children: ReactNode;
};
