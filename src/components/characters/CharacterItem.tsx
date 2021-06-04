import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CharacterItem.module.css'

interface Props {
  id: number;
  name: string;
  imageUrl: string;
}

const CharacterItem: React.FC<Props> = ({
id,
name,
imageUrl
} 
) => {
  return (
    <div>
      <Link
        to={`/detail/${id}`}
        className={styles.link}
      >
        <figure>
    <img
      src={imageUrl}
      alt={name}
      className={styles.img}
    />
    <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default CharacterItem
