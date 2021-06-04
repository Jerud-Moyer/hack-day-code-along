import React, { useState } from 'react'
import CharacterItem from './CharacterItem';
import styles from './CharacterByName.module.css';
import { getCharactersByName } from '../../services/trek-api';
import { ListCharacter } from '../../types/types';


const CharacterByName: React.FC = () => {
  const [searchBy, setSearchBy] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ListCharacter[]>([])

  const handleChange = 
    (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBy(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getCharactersByName(searchBy)
      .then(fetchedCharacters => 
        setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
    setSearchBy('');

  }

  const characterItems = characters.map(
    character => (
      <li
        key={character.id}
        className={styles.characterBox}
      >
        <CharacterItem {...character} />
      </li>
    )
  ) 

  if(loading) return (
  <h1
    className={styles.loadingMessage}
  >
    Aye Captain, I'm givin er' all she's got!
  </h1>
  )

  return (
    <div className={styles.searchBox} >
      <form 
        onSubmit={handleSubmit}
        className={styles.form} 
      >
        <input 
          type='text'
          value={searchBy}
          placeholder={'enter character name'}
          onChange={handleChange}
          className={styles.input}
          />
        <button>submit</button>
      </form>
        {characters &&
          <ul className={styles.listBox} >
            {characterItems}
          </ul>
        }
    </div>
  )
}

export default CharacterByName
