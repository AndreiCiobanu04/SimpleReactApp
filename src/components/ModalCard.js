import React from 'react'
import './ModalCard.scss'


const ModalCard = (props) => {

    const {thumbnail, title, content, date, author} = props
  
        return(
        <div  className="modal-card">
             <div style={{  
    background: `url(${thumbnail.small})`,
  
    display: 'table',
    width: '100%',
    backgroundPosition: 'center top',
    height: '45%'
             }}>
                 </div> 
           
            <div className="container-modal">
            <h2 className="title-modal">{title}</h2>
            <div className="content-modal">{content}</div>
            <div className="author-modal">
            {author.avatar && <img className="image-modal" src={author.avatar}></img>}
            <span>{author.name} - </span>
            <span >{author.role}</span>
            
            </div>

            </div>
            
           </div>
)
}

export default ModalCard;