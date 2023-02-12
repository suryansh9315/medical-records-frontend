import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="h-screen w-screen absolute top-0 bg-gray-200 flex items-center justify-center z-40">
      <ClipLoader
        color='black'
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
