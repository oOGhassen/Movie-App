import React, { useState } from 'react'
import Modal from 'react-modal';
import { StarRating } from './StarRating';

const AddNewMovie = ({handleAdd}) => {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("1");
    const [date, setDate] = useState("");
    const handleRating =(x)=>{
        setRating(x)
    }
const handleSubmit=(e)=>{
  e.preventDefault()
  const newMovie={title,poster,date,rating,id:Math.random()}
  handleAdd(newMovie)
  closeModal()
  setTitle("");
  setPoster("");
  setDate("");
  setRating("");
}

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }
    

  return (
    <div><button className='btn' onClick={openModal}>Add</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}></input>
        <label>Movie Poster</label>
        <input type="text" value={poster} onChange={e=>setPoster(e.target.value)}></input>
        <StarRating rating={rating} handleRating={handleRating}/>
        <label>Movie Date</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)}></input>
        <div>
        <button className='btn' type='submit'>Add</button>
        <button className='btn' onClick={closeModal}>Cancel</button>
        </div>
    </form>
    </Modal>
    </div>
  )
}

export default AddNewMovie