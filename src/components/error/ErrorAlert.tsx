import { ReactNode } from 'react';

type ErrorAlertParams = { children: ReactNode };

export default function ErrorAlert({ children }: ErrorAlertParams) {
  return (
    <article className="errorAlert">
      {children}
    </article>

  );
}
