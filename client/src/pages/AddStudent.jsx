import React from "react";

function AddStudent() {
  return (
    <div>
      <div class="p-4 text-2xl font-semibold">
        <h3 class="">Add Students</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="m-4 bg-slate-900 rounded-xl p-6">
            <div class="card-body">
              <form>
                <div class="col-12">
                  <h5 class="text-xl pb-4">
                    Student Information{" "}
                    <span>
                      <a href="javascript">
                        <i class="feather-more-vertical"></i>
                      </a>
                    </span>
                  </h5>
                </div>
                <div class="grid grid-cols-3 gap-4 gap-y-8">
                  <div class="">
                    <div class="">
                      <label>
                        First Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="">
                      <label>
                        Last Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter First Name"
                        m-4
                        bg-slate-900
                        rounded-xl
                        p-6
                      />
                    </div>
                  </div>
                  <div class="inline-block relative items-center">
                    <label>
                      Gender <span class="text-red-500">*</span>
                    </label>
                    <div className="flex items-center cursor-pointer">
                      <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Select Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class=" calendar-icon">
                      <label>
                        Date Of Birth <span class="text-red-500">*</span>
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="text"
                        placeholder="DD-MM-YYYY"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="">
                      <label>Username </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Username"
                      />
                    </div>
                  </div>

                  <div class="">
                    <div class="">
                      <label>
                        E-Mail <span class="text-red-500">*</span>
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div class="inline-block relative items-center">
                    <label>
                      Class <span class="text-red-500">*</span>
                    </label>
                    <div className="flex items-center cursor-pointer">
                      <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Please Select Class </option>
                        <option>12</option>
                        <option>11</option>
                        <option>10</option>form-control select
                      </select>
                      <div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div class="">
                      <label>Admission ID </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Admission ID"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="">
                      <label>Phone </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="form-group students-up-files">
                      <label>Upload Student Photo (150px X 150px)</label>
                      <div class="mt-2">
                        <label className="border px-6 py-2 mx-auto cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center">
                          Choose File
                          <input className="hidden" type="file" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" mt-4">
                  <div class="">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                    >
                      Submit
                    </button>
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

export default AddStudent;
