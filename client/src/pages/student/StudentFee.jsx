import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../../components";

function FeeData() {
  const [student, setStudent] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem("user"));
    console.log(user);
    axios
      .get(`https://lmsadmin.onrender.com/fees/student?slug=${user.slug}`)
      .then((res) => {
        setStudent(res.data[0].node);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    console.log(student);

  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Your Fee Details</h3>
      </div>
      {loading && <Loader />}

      <div className="m-4 bg-[#F7F6FB] rounded-xl p-6">
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Invoiced</th>
              <th className="p-4">Credited</th>
              <th className="p-4">Balance</th>
              <th className="p-4">Paid Date</th>
              <th className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            {student.fees?.map((fee, index) => {
              return (
                <tr key={index}>
                  <td className="p-4">{fee.slug}</td>
                  <td className="p-4">
                    {fee.type === "invoice" ? fee.amount : "0.00"}
                  </td>
                  <td className="p-4">
                    {fee.type === "credit" ? fee.amount : "0.00"}
                  </td>
                  <td className="p-4">{student?.balance}</td>
                  <td className="p-4">{fee.payday}</td>
                  <td className="text-end">
                    <span className="">
                      {parseFloat(fee.student?.balance) > 0
                        ? "Paid"
                        : "Arrears"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeData;
