import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-[70px] left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
      <div className={`${
        type === 'danger' ? 'bg-red-800' : 'bg-green-800'
      } p-2 text-indigo-100 leading-none rounded-lg flex lg:inline-flex items-center pointer-events-auto max-w-md mx-auto shadow-lg`} role="alert">
        <p className={`${
          type === 'danger' ? 'bg-red-500' : 'bg-green-500'
        } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
