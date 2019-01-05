export function currentDate(){
  const d = new Date()
  let month = addZero(d.getMonth()+1)
  let day = addZero(d.getDate())
  let currDate = (`${d.getFullYear()}-${month}-${day}`)
  return currDate
}

function addZero( num ) {
    if( num.toString().length < 2 ) // Integer of less than two digits
        return "0" + num; // Prepend a zero!
    return num.toString(); // return string for consistency
}

export function adultAge(){
  const d = new Date()
  let year = d.getFullYear()-18
  let month = addZero(d.getMonth())
  let day = addZero(d.getDate())
  let currDate = `${year}-${month}-${day}`
  return currDate
}
