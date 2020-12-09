
import moment from 'moment'
import React, {useState} from 'react'
import './Card.scss'
import './Modal.scss'
import './MyModal'
import MyModal from './MyModal'

const Card = (props) => {

    const {thumbnail, title, content, date, author} = props
    const [isHover, setIsHover] = useState(false);
    console.log(isHover)
    const [modalActive, setModalActive] = useState(false);

    

    return(
        <div  onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="card">
             <div style={{  
  
  
  display: 'table',
  width: '100%',
  background: isHover ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thumbnail.small})` : `url(${thumbnail.small})`   ,
  backgroundPosition: 'center top',
  color: 'white',
  width: '100%',
  textAlign: 'center',
  alignContent:'center',
  justifyContent:'center',
  display:'flex',
  flexDirection:'column',
  color: 'white',
  
  
  height: '45%'
             }}>{isHover ?  <span onClick={() => setModalActive(true)}>Learn More</span> : ""}</div> 
             <div className="container">
            <div>
            <span className="dot blue-dot"></span>
            <span className="dot"></span>
            </div>

            <h2 className="title" onClick={()=> setModalActive(true)}>{title}</h2>
            <div className="content">{content}</div>
            <div className="author">
            <span>{author.name} - </span>
            <span >{author.role}</span>
            <span className="date">{moment(date*1000).format("MMM DD, YYYY")}</span>
            </div>

            </div>
            
            <MyModal  modalActive={modalActive} setModalActive={setModalActive} {...props}/>
           

        </div>

)
}

export default Card;