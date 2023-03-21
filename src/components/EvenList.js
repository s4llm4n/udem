import React from 'react'
import styles from './EvenList.module.css'

export default function EvenList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id }>
          <h2>{index} - {event.title}</h2>
          <p>{event.location} - {event.date}</p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
