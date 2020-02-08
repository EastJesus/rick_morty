import React, { useState, useEffect, FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import useCharacters from './requests/GetCharacters'
import Characters from './components/Characters/Characters'
import Party from './components/Party/Party'
import styles from './container.module.css'
import './style.scss'

import _ from 'lodash'

const Container = () => {
    
    const [value, setValue] = useState('')
    const [fetchedData, setFetchedData] = useState(null)
    const [selectedCharacters, setSelectedCharacters] = useState({rick: null, morty: null})
    const [deletedCharacters, setDeletedCharacters] = useState([])
    const data = useCharacters({name: value})

    useEffect(() => {
        if (value.length > 2) setFetchedData(data)
    })

    // Посылаем запрос к API не чаще, чем раз в 300мс
    const handleType = (e) => {
        e.persist()
        const debounceFunction = _.debounce(() =>{
            const value = e.target.value;
            if (!value || value.length < 3) return;
            setValue(value);
        }, 300)
        
        debounceFunction()
    }

    const handleDeleteCharacter = (name) => {
        setDeletedCharacters([...deletedCharacters, ...[name]])
    }

    const handleSelectCharacter = (item) => {
        if (item.name.toLowerCase().includes('rick')) {
            setSelectedCharacters({
                rick: item,
                morty: selectedCharacters.morty
            })
        }
        else if (item.name.toLowerCase().includes('morty')) {
            setSelectedCharacters({
                rick: selectedCharacters.rick,
                morty: item
            })
        }
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.game}>
          <TextField label="Поиск" variant="outlined" fullWidth onChange={handleType} />
          <Characters 
            data={fetchedData} 
            deletedCharacters={deletedCharacters} 
            onDelete={handleDeleteCharacter} 
            onClick={handleSelectCharacter}
          />
          <Party characters={selectedCharacters} />
        </div>
      </div>
    );
}

export default Container