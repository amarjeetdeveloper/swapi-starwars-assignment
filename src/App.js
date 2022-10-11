import React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {Navbar} from "./components/Navbar"
import { Container, Dimmer, Loader } from "semantic-ui-react"
import Home from "./components/Home"
import People from "./components/People"
import Movie from "./components/Movie"


function App() {
  const [people, setPeople] = useState([])
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect( () => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchMovie() {
      let res = await fetch("https://swapi.dev/api/people/1/?format=json");
      let data = await res.json();
      setMovie(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchMovie();

  },[]);

  return (
    <>  
      <Router>
       <Navbar />
       <Container>
        {loading ? (
          <Dimmer active inverted>
<Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People data={people}/>
          </Route>
          <Route exact path="/movie">
            <Movie data={movie}/>
          </Route>
        </Routes>
        )}
       </Container>
      </Router>
    </>
  )
}

export default App