import moment from 'moment';
import useWeekCalender from '../Hooks/useWeekCalender.hook'
import useDayCalender from '../Hooks/useDayCalender.hook'
import WeekView from '../Layouts/WeekView';
import DayView from '../Layouts/DayView';
import { useState } from 'react';

function Calender() {
  const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
  const hours = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM"
  ];
  let initialState = {
    startDate: moment().startOf('week').format('MM/DD/YYYY'),
    endDate: moment().endOf('week').format('MM/DD/YYYY'),
  }
  const [dates, todaysDate, weekOfYear, setNextWeekDates, setPrevWeekDates, resetCalender, selectWeekDay] = useWeekCalender(initialState);
  const [currentDate, todaysDay, setNextDate, setPrevDate, resetDay, selectDay] = useDayCalender();
  const [layout, setLayout] = useState('week')
  let WeekViewProps = {
    dates: dates,
    todaysDate: todaysDate,
    weekOfYear: weekOfYear,
    activeDate: currentDate,
    days,
    hours,
    onClickDate: (date: string) => { setLayout('day'); selectDay(date)},
  }

  const next = () => {
    if (layout === 'day') {
      setNextDate()
    } else {
      setNextWeekDates()
    }
  }
  const prev = () => {
    if (layout === 'day') {
      setPrevDate()
    } else {
      setPrevWeekDates()
    }
  }
  const reset = () => {
    if (layout === 'day') {
      resetDay()
    } else {
      resetCalender()
    }
  }

  const DayViewProps = {
    hours,
    todaysDate: todaysDay,
    date: currentDate,
    onClickDay: (date:string) => { setLayout('week');  selectWeekDay(date)},
  }

  return (
    <>
      <div className="header flex justify-between border-b p-2 sticky w-full top-0 bg-white z-50">
        <span className="text-lg font-bold">
          {todaysDate}
        </span>
        <div className="buttons flex items-center">
          <button className="py-1.5 px-4 border mr-6 text-base rounded hover:bg-gray-100" title={todaysDate} onClick={() => reset()}>
            Today
          </button>
          <select id="views" value={layout} className="py-1.5 px-4 border mr-6 text-base rounded hover:bg-gray-100" onChange={(event) => setLayout(event.target.value) }>
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
          <button className="p-1" onClick={() => prev()}>
            <svg
              width="1.5em"
              fill="gray"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-left-circle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fillRule="evenodd"
                d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </button>
          <button className="p-1" onClick={() => next()}>
            <svg
              width="1.5em"
              fill="gray"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right-circle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
              />
              <path
                fillRule="evenodd"
                d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      {
        layout === 'day' ? <DayView {...DayViewProps} /> : <WeekView {...WeekViewProps} />
      }
    </>
  )
}

export default Calender