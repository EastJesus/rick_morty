import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Character from './Character'
import styles from './character.module.css'


const Characters = props => {

    const {data, deletedCharacters} = props
    
    return (
      <div className={styles.characters}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionLeave={true}
        >
          {data &&
            data.characters &&
            data.characters.results &&
            data.characters.results
              .filter(item => {
                return !deletedCharacters.includes(item.name);
              })
              .map((item, idx) => (
                <Character
                  key={idx}
                  character={item}
                  onDelete={props.onDelete}
                  onClick={props.onClick}
                />
              ))}
        </ReactCSSTransitionGroup>
      </div>
    );
}

export default Characters