import moment from 'moment';

export interface DayProps {
  hours: Array<string>,
  todaysDate: any,
  date: string,
  onClickDay(date:string): void
}


function DayView(props: DayProps) {
  const hours: Array<string> = props.hours;

  const isTodaysDate = (date: string) => {
    return moment(date).isSame(moment(new Date()).format('MM/DD/YYYY'))
  }

  return (
    <div>
      <div className='bg-white'>
        <div className="grid grid-cols-22 overflow-auto">
          <div className='col-span-1 bg-white'></div>
          <div className={"col-span-21 border-b border-l p-1 transition cursor-pointer duration-500 ease " + ((isTodaysDate(props.date)) ? "bg-blue-200 text-blue-600 font-semibold hover:bg-blue-900 hover:text-slate-200" : "text-white bg-teal-500 hover:bg-teal-700 hover:text-white")}
            onClick={() => props.onClickDay(props.date)}
          >
            <span className="md:text-lg text-xs font-semibold">
              {moment(props.date).format("MMM D")}
            </span>
            <br />
            <span className="md:text-normal text-sm font-semibold">
              {moment(props.date).format('dddd')}
            </span>
          </div>
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
          <div className="col-span-21 bg-gray-100">
            {
              hours.map((time, idx) => {
                return <div key={idx} className="border border-gray-200 p-1 h-16" aria-describedby={time}></div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayView