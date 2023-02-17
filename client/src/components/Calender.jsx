import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMinute,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useEffect, useState } from "react";
import Datetime from "./DateTime";
import axios from "axios";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: Datetime(),
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-06-09T13:00",
    endDatetime: "2022-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-13T14:00",
    endDatetime: "2023-02-13T14:30",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calender({ full }) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/lessons").then((res) => {
      setLessons(res.data);
      // setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("lessons", lessons);

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  const inputDate = new Date();
  // const inputTime = "05:59";
  // inputDate.setHours(inputTime.split(":")[0]);
  // inputDate.setMinutes(inputTime.split(":")[1]);
  const currentTime = new Date();

  const selectedDayLessons = lessons.filter(
    (lesson) =>
      format(currentTime, "EEE") ===
      format(
        parseISO(
          format(new Date(), "yyyy-MM-dd") +
            `T00:00:00.000${lesson.node.day === "Sun" ? "Z" : ""}`
        ),
        "EEE"
      )
  );
  lessons.length &&
    console.log(
      format(currentTime, "EEE") ===
        format(
          parseISO(
            format(new Date(), "yyyy-MM-dd") +
              `T00:00:00.000${lessons[0].node.day === "Sun" ? "Z" : ""}`
          ),
          "EEE"
        )
    );

  // console.log(
  //   "select",
  //   format(
  //     parseISO(
  //       format(new Date(), "yyyy-MM-dd") +
  //         `T00:00:00.000${lessons[0].node.day === "Sun" ? "Z" : ""}`
  //     ),
  //     "EEE"
  //   ),
  //   format(currentTime, "EEE"),
  //   isSameDay("Fri", "Fri")
  // );
  console.log("select", selectedDayLessons);

  if (
    isSameDay(currentTime, inputDate) &&
    isSameMinute(currentTime, inputDate)
  ) {
    console.log("The current time is the same as the input time");
  } else {
    console.log("The current time is different from the input time");
  }
  return (
    <div className={` rounded-lg ${full ? "w-full p-4" : ""}`}>
      <div className="max-w-md mx-auto sm:px-7 md:max-w-4xl">
        <div
          className={` divide-x md:grid md:grid-cols-2 divide-gray-200 p-4 bg-[#F7F6FB] mx-auto ${
            full ? "" : ""
          }`}
        >
          <div className="mx-auto ">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 w-10 items-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/less-than.png"
                  alt=""
                />
              </button>
              <h2 className="text-xl font-semibold text-gray-800 mx-auto">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>

              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 w-10 -mr-1.5 ml-2 items-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/more-than.png"
                  alt=""
                />
              </button>
            </div>
            <div className="grid font-semibold grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-700">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "p-2 "
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-300",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-green-700",
                      !isEqual(day, selectedDay) &&
                        "hover:bg-gray-900 hover:text-white ",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 text-gray-700 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 px-2">
            <h2 className="font-semibold text-gray-800 text-lg">
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>

            <ol className="mt-4 space-y-1 text-sm border-b-2 border-gray-600 leading-6 text-gray-500">
              {selectedDayLessons.length > 0 ? (
                selectedDayLessons.map((lesson, index) => (
                  <Lesson lesson={lesson.node} key={index} />
                ))
              ) : (
                <p>No lessons for today.</p>
              )}
            </ol>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Lesson({ lesson }) {
  const inputDate = new Date();
  const inputTime = "05:59";
  inputDate.setHours(inputTime.split(":")[0]);
  inputDate.setMinutes(inputTime.split(":")[1]);
  const currentTime = new Date();
  if (
    isSameDay(currentTime, inputDate) &&
    isSameMinute(currentTime, inputDate)
  ) {
    console.log("The current time is the same as the input time");
  } else {
    console.log("The current time is different from the input time");
  }

  return (
    <div className="flex gap-4 pb-4 divide-x-4 text-gray-700 divide-blue-600 ">
      <div className="flex flex-col border-r-3">
        <span className="font-semibold">{lesson.day}</span>
        <span className="">{lesson.stream?.name}</span>
      </div>
      <div className="flex pl-2 justify-between grow " >
        <div className="">
          <h2 className="text-gray-700 font-semibold text-base">
            {lesson.subject.name}
          </h2>
          <h2 className="">{lesson.teacher?.name}</h2>
        </div>
        <div className="flex flex-col justify-end">
          <div className="">{lesson.startTime}</div>
          <div className="">{lesson.endTime}</div>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }) {
  const startDateTime = parseISO(meeting.startDatetime);
  const endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
    </li>
  );
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
