import React from 'react'
import styles from './party.module.css'

const PartyImage = (props) => {

    const {name, image} = props

    return (
      <div className={styles.party__image}>
        {image && <img src={image.image} />}
        {!image && <p>{name}</p>}
      </div>
    );
} 

export default PartyImage