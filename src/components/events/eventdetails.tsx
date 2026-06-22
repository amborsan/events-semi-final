

function EventDetailsTwo(props) {


// const [a,setA]= useState()
const clickHandler= (e)=>{
// setA("AAAAAAAAAAAAAA")
// e.target.textContent = a
console.log('Clicked' , e.target)
console.log('pppppp: ', {props})
}
  // console.log('Props: ', a)
  return (
  <div onClick={clickHandler}><h1>Event: ==== </h1> </div>
  )
}

export default EventDetailsTwo;
