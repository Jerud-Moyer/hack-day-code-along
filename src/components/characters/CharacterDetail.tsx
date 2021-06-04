import React from 'react';
import { useHistory } from 'react-router';
import { useSingleCharacter } from '../../hooks/characters';
import styles from './CharacterDetail.module.css';

const CharacterDetail: React.FC = () => {
  const { loading, character } = useSingleCharacter();
  const history = useHistory();

  
  if(loading || !character) return (
    <div className={styles.loadingBox}>
      <h1 className= {styles.loadingMessage}>
        Dammit Jim I'm Loading...
      </h1>
    </div>
  )
  
  const { imageUrl, name, origin, race, affiliation } = character;
  
  return (
    <div className={styles.detailBox}>
      <h1>{character.name}</h1>
      <img 
        src={imageUrl} 
        alt={name}
        className={styles.characterPic} />
      <h2>{`race: ${race}`}</h2>  
      <h2>{`origin: ${origin}`}</h2>
      <h2>{`affiliation: ${affiliation}`}</h2>
      <button onClick={() => history.push('/')} >home</button>
      
    </div>

  )

}
    
    
   

export default CharacterDetail
