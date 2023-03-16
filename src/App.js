
import './App.css';
import React,{ useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id:1},
    {title: "bowser live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id }>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <Modal>
        <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Error odit nam et
          reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum,
          quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
          <a href="#">Find out more...</a>
      </Modal>

    </div>
  );
}

export default App;
