import {useState, useEffect} from 'react'
import moment from 'moment'

const useDayCalender = () => {
  const [currentDate, setCurrentDate] = useState(moment().format("MMM DD, YYYY"))
  const [todaysDate, settodaysDate ]= useState(moment().format("MMM DD, YYYY"))

  useEffect(()=> {
    settodaysDate(moment().format("MMM DD, YYYY"))
  }, [todaysDate]);

  const setNextDayDate = () => {
    setCurrentDate(moment(moment(currentDate).add(1,'days')).format("MMM DD, YYYY"))
  }

  const setPrevDayDate = () => {
    setCurrentDate(moment(moment(currentDate).add(-1,'days')).format("MMM DD, YYYY"))
  }

  const resetDay = () => {
    setCurrentDate(moment().format("MMM DD, YYYY"))
  }
  const selectDay = (date: string) => {
    setCurrentDate(moment(date).format("MMM DD, YYYY"))
  }

  return [currentDate, todaysDate, setNextDayDate, setPrevDayDate, resetDay, selectDay] as const
}

export default useDayCalender
