import { Placeholder } from "placeholder";
import React from "react";

const Loader = () => {
  return (
    <div className="m-4 p-4  rounded-md text-center  border-2 border-gray-500 animate-pulse">
      <p className="mb-4">
        <span className="inline-block py-2 min-h-[3rem] w-32 h-32 flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
      </p>
      <p className="mb-4">
        <span className="inline-block py-2 min-h-[3rem] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
      </p>
      <p className="mb-4">
        <span className="inline-block py-2 min-h-[10rem] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
      </p>
      <p className="mb-4">
        <span className="inline-block py-2 min-h-[30rem] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
      </p>
      <p className="mb-4">
        <span className="inline-block py-2 min-h-[3rem] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-white"></span>
      </p>
    </div>
  );
};

export default Loader;
