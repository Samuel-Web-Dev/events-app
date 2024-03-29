import EventItem from "./event-item"
import classes from './event-list.module.css'


const EventList = (props) => {
  const { items } = props
  console.log(items);
  return (
    <ul className={classes.list}>
      {items.map((event) => <EventItem key={event.id} id={event.id} title={event.title} location={event.location} image={event.image} date={event.date} />)}
     </ul>
   )
}
 
export default EventList