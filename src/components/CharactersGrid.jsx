import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const CharactersGrid = ({isLoading,cast}) => {
    return isLoading?(<Spinner />):( 
    <section className="cards">
        {
            cast.map(character=>(
                <CharacterItem key={character.char_id} character={character} />
            ))
        }
    </section>)
}

export default CharactersGrid;
