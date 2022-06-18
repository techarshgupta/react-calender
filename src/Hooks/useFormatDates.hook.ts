const useFormatDates = () => {
  const getFormatedDate = (date: string) => { 
    let splittedDate = date.split('/');
    let fDate = '';
    switch(splittedDate[0]) {
      case '01':
        fDate = `Jan ${splittedDate[1]}`
        break
      case '02':
        fDate = `Feb ${splittedDate[1]}`
        break
      case '03':
        fDate = `Mar ${splittedDate[1]}`
        break  
      case '04':
        fDate = `Apr ${splittedDate[1]}`
        break
      case '05':
        fDate = `May ${splittedDate[1]}`
        break            
      case '06':
        fDate = `Jun ${splittedDate[1]}`
        break 
      case '07':
        fDate = `Jul ${splittedDate[1]}`
        break
      case '08':
        fDate = `Aug ${splittedDate[1]}`
        break
      case '09':
        fDate = `Sep ${splittedDate[1]}`
        break  
      case '10':
        fDate = `Oct ${splittedDate[1]}`
        break
      case '11':
        fDate = `Nov ${splittedDate[1]}`
        break            
      case '12':
        fDate = `Dec ${splittedDate[1]}`
        break    
    } 
    return fDate;
  } 
  return [getFormatedDate] as const;
}

export default useFormatDates