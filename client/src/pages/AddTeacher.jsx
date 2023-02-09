import React from "react";

function AddTeacher() {
  return (
    <div>
      <div class="p-4 text-2xl font-semibold">
        <h3 class="">Add Teachers</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="m-4 bg-slate-900 rounded-xl p-6">
            <div class="card-body">
              <form>
                <div class="col-12">
                  <h5 class="text-xl pb-4">
                    Teacher Information{" "}
                    <span>
                      <a href="javascript">
                        <i class="feather-more-vertical"></i>
                      </a>
                    </span>
                  </h5>
                </div>
                <div class="grid grid-cols-3 gap-4 gap-y-8 pb-4">
                  <div class="">
                    <div class="">
                      <label>
                        Name <span class="text-red-500">*</span>
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
                      <label>Teacher ID </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Admission ID"
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
                      <label>Qualification </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Qualifications"
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
                    <div class="">
                      <label>Joining date </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="DD-MM-YYYY"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <h5 class="text-xl py-4">
                    <span>Login Details</span>
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-4 gap-y-8 pb-4">
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <label>
                        Username <span class="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Username"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <label>
                        Email ID <span class="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Mail Id"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <label>
                        Password <span class="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <label>
                        Repeat Password <span class="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Repeat Password"
                      />
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

export default AddTeacher;
