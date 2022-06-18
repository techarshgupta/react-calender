import moment from 'moment';
import useFormatDates from '../Hooks/useFormatDates.hook';

export interface WeekProps {
  dates: Array<string>,
  hours: Array<string>,
  days: Array<string>,
  todaysDate: string,
  weekOfYear: number,
  activeDate: string,
  onClickDate(date: string): void,
}

function WeekView(props: WeekProps) {

  const dates: Array<string> = props.dates;
  const days: Array<string> = props.days;
  const hours: Array<string> = props.hours;
  const [getFormatedDate] = useFormatDates()

  const formatDate = (date: string, index: number) => {
    let formatedDate = getFormatedDate(date);
    return formatedDate
  }

  const isTodaysDate = (date: string, index: number) => {
    return moment(date).isSame(moment(new Date()).format('MM/DD/YYYY'))
  }

  const isActive = (activeDate: string, date: string) => {
    return moment(activeDate).isSame(moment(date).format('MM/DD/YYYY'))
  }

  return (
    <div>
      <div className='bg-white'>
        <div className="grid grid-cols-22 overflow-auto">
          <div className='col-span-1 bg-white'></div>
          {
            dates?.map((date, index) => {
              return <div className={"col-span-3 border p-1 transition cursor-pointer duration-500 ease " + ((isTodaysDate(date, index)) ? "bg-blue-200 text-blue-600 font-semibold hover:bg-blue-900 hover:text-slate-200" : isActive(props.activeDate, date) ? "text-white bg-teal-500 hover:bg-teal-700 hover:text-white" : "text-gray-500 bg-white  hover:bg-gray-300")}
                key={index} onClick={() => props.onClickDate(date)}>
                <span className="md:text-lg text-xs font-semibold">
                  {
                    `${formatDate(date, index)}`
                  }
                </span>
                <br />
                <span className="md:text-normal text-sm font-semibold">
                  {
                    `${days[index]}`
                  }
                </span>
              </div>
            })
          }
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg z-0">
        <div className="grid grid-cols-22">
          <div className='col-span-1'>
            {
              hours.map((time, idx) => {
                return <div key={idx} className="border p-1 h-16 text-xs">{time}</div>
              })
            }
          </div>
          {
            dates.map((date, index) => {
              return <div key={index} className="col-span-3 bg-gray-100">
                {
                  hours.map((time, idx) => {
                    return <div key={idx} className="border border-gray-200 p-1 h-16" aria-details={date + time}></div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WeekView