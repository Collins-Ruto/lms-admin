import React from "react";

function AddFee() {
  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Add Fees</h3>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="m-4 bg-[#121212] rounded-xl p-6">
            <div className="card-body">
              <form>
                <div className="row">
                  <div
                    className="
                  "
                  >
                    <h5 className="text-xl pb-4">
                      <span>Fees Information</span>
                    </h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 gap-y-8">
                    <div
                      className="
                    "
                    >
                      <div className="form-group local-forms">
                        <label>
                          Student ID <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div
                      className="
                    "
                    >
                      <div className="form-group local-forms">
                        <label>
                          Student Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div
                      className="
                    "
                    >
                      <div className="form-group local-forms">
                        <label>
                          Class <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group local-forms">
                        <label>
                          Fees Amount <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group local-forms calendar-icon">
                        <label>
                          Paid Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                          type="text"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="student-submit">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFee;
