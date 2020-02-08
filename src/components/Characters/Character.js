import React from 'react'
import CancelIcon from "@material-ui/icons/Cancel";
import styles from './character.module.css'

const Character = props => {
    const {character} = props

    return (
      <div className={styles.character}>
        <CancelIcon
          className={styles.character_close}
          onClick={() => {
            props.onDelete(character.name);
          }}
        />
        <img src={character.image} alt={character.name} onClick={() => {props.onClick(character)}} />
      </div>
    );
}

export default Character