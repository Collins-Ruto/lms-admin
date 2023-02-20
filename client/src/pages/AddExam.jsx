import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, DateTime, Loader } from "../components";

const data = {
  examDate: "10-03-2020",
  results: JSON.stringify({}),
};

function AddExam() {
  const [exam, setExam] = useState(data);
  const [admid, setAdmid] = useState("");
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false)
  
  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/subjects").then((res) => {
      setSubjects(res.data.subjects);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setExam({ ...exam, [name]: value });
  };

  const handleResult = (event) => {
    
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name.toString();

    setExam({...exam, results:{ ...exam.results, [name]: value }});
  };

  const handleSubmit = () => {
    setSubmit(true)
    axios
      .post("https://lmsadmin.onrender.com/exams", { data: exam })
      .then((res) => {
        res.status === 200 && setExam(data);
        console.log(res);
        setSubmit(false);
      });
  };

  const getStudent = () => {
    setSubmit(true)
    axios
      .get(`https://lmsadmin.onrender.com/exams/student?admissionId=${admid}`)
      .then((res) => {
        setStudent(res.data.student);
        console.log("student", student)
        setExam({
          ...exam,
          student: { connect: { Student: { slug: res.data.student.slug } } },
        });
        setSubmit(false)
      });
    
  };
  console.log(exam);
  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Add Exam Results</h3>
      </div>
      {loading && <Loader />}
      <div className="">
        <h2 className="px-4 text-sm">Search for student in the system first</h2>
        <div className="flex px-4 pb-">
          <div className="md:mr-8">
            <div className="">
              <input
                onChange={(e) => setAdmid(e.target.value)}
                value={admid}
                type="text"
                className="shadow bg-[#F7F6FB] appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Admission No"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              {submit ? (
                <Button />
              ) : (
                <button
                  onClick={() => getStudent()}
                  type="btn"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Search
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="m-4 bg-[#F7F6FB] rounded-xl flex justify-between p-4">
          <div>
            Student :{" "}
            <span className="font-semibold text-lg">{student?.name}</span>
          </div>
          <div>
            Stream:{" "}
            <span className="font-semibold text-lg">
              {student?.stream?.name}
            </span>
          </div>
          <div>
            Date: <span className="font-semibold text-lg">{DateTime()}</span>
          </div>
        </div>

        <div className="m-4 bg-[#F7F6FB] flex gap-4 rounded-xl p-6">
          <div className="">
            <label>
              Exam Name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              value={exam.name}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="eg: End Term 1"
              name="name"
            />
          </div>
          <div className="">
            <label>
              Current Term <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              value={exam.term}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="eg: 2020 II"
              name="term"
            />
          </div>
          <div className="">
            <label>
              Unique Identifier <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              value={exam.slug}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="eg: 282021i"
              name="slug"
            />
          </div>
        </div>
      </div>
      <div className="m-4 bg-[#F7F6FB] p-4 rounded-xl">
        <table className="w-full">
          <thead>
            <tr className="p-4 text-lg bg-[#efeef4]">
              <th className=" text-xl p-4">Subject</th>
              <th className="text-xl">Score</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((subject, index) => {
              const slug = subject.slug;
              return (
                <tr
                  key={index}
                  className={` p-4 ${index % 2 === 0 && "bg-white"}`}
                >
                  <td className="px-4 py-2 text-lg">{subject.name}</td>
                  <td className="px-4 py-2">
                    <input
                      onInput={(e) => {
                        handleResult(e);
                      }}
                      value={exam.results[slug]}
                      className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      placeholder="eg: 80"
                      name={slug}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" mt-8">
          <div className="">
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
      </div>
    </div>
  );
}

export default AddExam;
