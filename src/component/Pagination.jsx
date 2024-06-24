import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-10/12 max-w-[550px] py-2">
        <div className="flex w-10/12 max-w-[550px] gap-2 mx-auto">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="rounded-md border py-2 px-2"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-md border py-2 px-2"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className=" mt-2">
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
