import {useState, useEffect} from 'react'
import moment from 'moment'

export interface State {
  startDate: string,
  endDate: string
}

const useWeekCalender = (initialValue: State) => { 
  const [dates, setDates] = useState(['']);
  const [startDate, setStartDate] = useState(initialValue.startDate)
  const [endDate, setEndDate] = useState(initialValue.endDate)
  const [weekCount, setWeekCount] = useState(moment().isoWeek())
  const [todaysDate, settodaysDate ]= useState(moment().format("MMM DD, YYYY"))

  const enumerateDaysBetweenDates = (sDate: string, eDate: string) => {
    let date = [];
    while(moment(sDate) <= moment(eDate)){
      date.push(sDate);
      sDate = moment(sDate).add(1, 'days').format("MM/DD/YYYY");
    }
    setWeekCount(moment(sDate, eDate).isoWeek());
    setDates(date)
  }

  useEffect(()=> {
    enumerateDaysBetweenDates(startDate, endDate);
  }, [startDate, endDate]);

  const setNextWeekDates = () => {
    setStartDate(moment(endDate).add(1, 'days').format("MM/DD/YYYY"))
    setEndDate(moment(endDate).add(7, 'days').format('MM/DD/YYYY'))
  }

  const setPrevWeekDates = () => {
    setEndDate(moment(startDate).subtract(1, 'days').format("MM/DD/YYYY"))
    setStartDate(moment(startDate).subtract(7, 'days').format('MM/DD/YYYY'))
  }

  const resetCalender = () => {
    setStartDate(moment().startOf('week').format('MM/DD/YYYY'))
    setEndDate(moment().endOf('week').format('MM/DD/YYYY'))
  }

  const selectWeekDay = (date: string) => {
    settodaysDate(moment(date).format("MMM DD, YYYY"))
  }

  return [dates, todaysDate, weekCount, setNextWeekDates, setPrevWeekDates, resetCalender, selectWeekDay] as const
}

export default useWeekCalender
