import React from 'react'
import ModalCard from './ModalCard'


const MyModal = ({modalActive, setModalActive, ...cardProps}) => {

        return(

<div id="myModal" className={`modal ${modalActive ? "show" : ""}`}>
    <div className="modal-content">
    <div className="close" onClick={()=> setModalActive(false)}>&times;</div>
        <div>
           <ModalCard {...cardProps}/> 
        </div>
    </div>

</div>
)

}


export default MyModal;
