import React from 'react';
import { Card, Grid } from "semantic-ui-react"


export default function Movie({data}) {
  return (
    <>
    <h1>Movie</h1>
    <Grid columns={3}>
     {data.map((movie, i) => {
         return (
             <Grid.Column key={i}>
                 <Card>
                     <Card.Content>
                         <Card.Header>{movie.name}</Card.Header>
                         <Card.Description>
                             <strong>Films</strong>
                             <p>{movie.films}</p>
                         </Card.Description>
                     </Card.Content>
                 </Card>
             </Grid.Column>
         )
     })}
    </Grid>
    </>
 
  );
}
