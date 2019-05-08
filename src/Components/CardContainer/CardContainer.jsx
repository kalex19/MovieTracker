import React from 'react'
import Card from '../Card/Card'

const CardContainer = ({fetchResults}) => {
    console.log(fetchResults)
    const display = fetchResults.map(movie => {
        return <Card key={movie.id} title={movie.title}/>
    }) 

    return(
        <main>
            {display}
        </main>
    )

}

export default CardContainer;