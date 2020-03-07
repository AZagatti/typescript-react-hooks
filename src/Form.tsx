import React, { forwardRef, useImperativeHandle } from 'react';

interface Props {
  initialData?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<FormRef, Props> = (props, ref) => {
  function submit() {
    alert('Submit');
  }

  useImperativeHandle(ref, () => ({
    submit
  }));

  return (
    <form action=''>
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default forwardRef(Form);
