import React from 'react'
import PartyImage from './PartyImage'
import styles from './party.module.css'

const Party = (props) => {

    const {characters} = props

    return (
      <div className={styles.party}>
        <h2>PARTY</h2>
        <div className={styles.party__characters}>
          <div className="rick">
            <PartyImage name="RICK" image={characters.rick} />
          </div>
          <div className="morty">
            <PartyImage name="MORTY" image={characters.morty} />
          </div>
        </div>
      </div>
    );
}

export default Party