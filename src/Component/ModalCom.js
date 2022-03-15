import React from 'react'
import Modal from 'react-modal';


function ModalCom() {

    Modal.setAppElement('#root');
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '20rem',
          height: '20rem'
        },
      };
    
      const closeButton = {
        width: "20px",
        height: "20px",
        float: "right",
        lineHeight: "1rem",
        minInlineSize: "fit-content",
      }
    
      const [modalIsOpen, setIsOpen] = React.useState(false);
      const [btnStyle, setBtnStyle] = React.useState({ position: 'relative' })
      let [topp, setTopp] = React.useState(0);
      let [left, setLeft] = React.useState(0);
      let [yes, setYes] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setIsOpen(false);
        setTopp(0)
        setLeft(0)
        setYes(false)
        setBtnStyle({ position: 'relative', left: '0px', top: '0px' })
      }
    
      const changePosition = () => {
    
        let newTop = 40
        let newLeft = 30
    
        do {
          newTop = getRndInteger(0, 184)
          newLeft = getRndInteger(-135, 146)
        }
        while (Math.abs(newTop - topp) < 20 && Math.abs(newLeft - left) < 30);
        setTopp(newTop);
        setLeft(newLeft)
    
        newTop = newTop + 'px';
        newLeft = newLeft + 'px';
        setBtnStyle({ position: 'relative', left: newLeft, top: newTop })
      }
    
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
      const yesClicked = () => {
        setYes(true)
      }

  return (
    <>
    <button onClick={openModal} className='btn btn-primary'>PRESS ME</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {yes === false && <div>
            <h2>KYA APP BEWAKOOF HO?</h2>
            <button className='btn-primary mx-4' onClick={yesClicked}>HA</button>
            <button className='btn-primary mx-4' style={btnStyle} onMouseOver={changePosition}>NA</button>
          </div>}
          {yes === true && <div>
            <button className='btn-primary mx-4' onClick={closeModal} style={closeButton}>X</button>
            <h1>MUJHE PATA THA AAP HO ...!!!</h1>
          </div>}
        </Modal>
    </>
  )
}

export default ModalCom