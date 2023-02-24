import React from 'react'
import { Calender } from '../components'

function CalenderPage() {
  return (
    <div className="p-6">
      <div className=" text-2xl font-semibold pb-4">
        <h3 className="">Full School Callender</h3>
      </div>
      <Calender full />
    </div>
  );
}

export default CalenderPage