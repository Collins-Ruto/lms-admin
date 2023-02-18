import axios from "axios";
import React, { useState } from "react";

const results = {
  examDate: "10-05-2020",
  name: "Jesma 2",
  results: JSON.stringify({"English":80, "Chemistry":76}),
  slug: "jesma2",
  term: "2020 III",
};

function AddExam() {
    const [exam, setExam] = useState( results );

    const handleSubmit = () => {
    //   axios
    //     .post("https://lmsadmin.onrender.com/exams", exam)
    //     .then((res) => console.log(res.message));
      axios
        .post("http://localhost:8000/exams", exam)
        .then((res) => console.log(res));
    };
    return (
      <div>
        AddExam
        <div className=" mt-4">
          <div className="">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}

export default AddExam;
