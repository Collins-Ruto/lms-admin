import React from "react";

function AddFee() {
  return (
    <div>
      <div class="p-4 text-2xl font-semibold">
        <h3 class="">Add Fees</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="m-4 bg-slate-900 rounded-xl p-6">
            <div class="card-body">
              <form>
                <div class="row">
                  <div
                    class="
                  "
                  >
                    <h5 class="text-xl pb-4">
                      <span>Fees Information</span>
                    </h5>
                  </div>
                  <div className="grid grid-cols-3 gap-4 gap-y-8">
                    <div
                      class="
                    "
                    >
                      <div class="form-group local-forms">
                        <label>
                          Student ID <span class="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div
                      class="
                    "
                    >
                      <div class="form-group local-forms">
                        <label>
                          Student Name <span class="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div
                      class="
                    "
                    >
                      <div class="form-group local-forms">
                        <label>
                          Class <span class="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="form-group local-forms">
                        <label>
                          Fees Amount <span class="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="form-group local-forms calendar-icon">
                        <label>
                          Paid Date <span class="text-red-500">*</span>
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                          type="text"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="student-submit">
                      <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
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
