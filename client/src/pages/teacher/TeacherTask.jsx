// import axios from "axios";

// function TeacherTask() {
//   const handleFileUpload = async (event) => {
//     const formData = new FormData();
//     formData.append("file", event.target.files[0]);
//     console.log(formData)
//     // await axios.post("/upload", formData);
//   };

//   return (
//     <form>
//       <input type="file" onChange={handleFileUpload} />
//     </form>
//   );
// }

// export default TeacherTask;

import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../components";
import StatusMsg from "../../components/StatusMsg";

function CreateTask() {
  const [task, setTask] = useState({});
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState({});

  const formData = new FormData();

  const handleInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "file" ? target.files[0] : target.value;

    formData.append([name], value);
    setTask({ ...task, [name]: value });
  };

  async function handleSubmit() {
    setSubmit(true);
    const res = await axios.post(
      "http://localhost:8000/infos/addtask",
      formData
    );
    setSubmit(false);
    setStatus(
      res.data.message === "success"
        ? {
            type: "success",
            message: `succesfully Created a ${res.data.subject.name} lesson for ${res.data.stream.name} on ${res.data.day}`,
          }
        : { type: "error", message: res.data.message }
    );
    setTimeout(() => {
      res.data.message === "success" && window.location.reload(true);
    }, 2000);
  }

  console.log(formData);

  return (
    <div>
      {<StatusMsg status={status} />}
      <div className="p-2 md:p-4 text-2xl font-semibold">
        <h3>Add Tasks</h3>
      </div>
      <div className="m-4 bg-[#F7F6FB] rounded-xl p-4 md:p-6">
        <form>
          <div className="flex flex-col md:grid grid-cols-3 gap-2 gap-y-4 md:gap-y-8">
            <div>
              <div>
                <label>
                 Task title <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  value={task.title}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="eg. Assignmets 1"
                  name="title"
                />
              </div>
            </div>
            <div>
              <div>
                <label>
                  Subject ID <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  value={task.sid}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="eg. geo"
                  name="sid"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Stream ID </label>
                <input
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  value={task.stid}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="eg. 1n"
                  name="stid"
                />
              </div>
            </div>
            <div>
              <label>
                Teacher Username <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={task.tid}
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="eg. 456erick"
                name="tid"
              />
            </div>
            <div>
              <label>Task Description & rules</label>
              <textarea
                onChange={(e) => {
                  handleInput(e);
                }}
                value={task.description}
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="eg. assignments 1"
                name="description"
              />
            </div>
          </div>
          <div>

            
<label class="block mb-2 font-medium" for="file_input">Upload file</label>
<input class="block w-fit leading-loose text-lg text-gray-900 bg-gray-500 rounded cursor-pointer focus:outline-none" type="file"/>
<p class="mt-1 text-sm text-gray-600" id="file_input_help">SVG, PNG, JPG or Any Document Type.</p>

          </div>

          <div className=" mt-4">
            <div>
              {submit ? (
                <Button />
              ) : (
                <button
                  onClick={() => handleSubmit()}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
