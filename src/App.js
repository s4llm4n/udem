
import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
import EvenList from './components/EvenList';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id:1},
    {title: "bowser live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
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
      {showEvents && <EvenList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Error odit nam et
          reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum,
          quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

    </div>
  );
} 

export default App;
