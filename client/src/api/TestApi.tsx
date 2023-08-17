import { useState } from 'react'
import { useEffect } from 'react';
import { getDataApi } from './getDataApi';
import { Cards } from '../components/Cards/Cards';
import { useAuth0 } from '@auth0/auth0-react';


export interface UserTypes {
  id: string,
  name: string,
  email: string,
  password: string,
  movies: string[]
}
export interface MoviesType {
  id: string,
  title: string,
  score: number,
  year: number,
  imageId: string,
  genres: GenreType[],
  genresArray : string[],
  createdAt: string,
  updatedAt: string,
  usersId: string
}

export interface GenreType {
  id: string,
  genre: string
  createdAt: string,
  updatedAt: string,
  moviesId: string[],



}

export const TestApi =  () => {
    const [user, setUser] = useState<UserTypes[]>([])
    const [movies, setMovies] = useState<MoviesType[]>([])
    const [genres, setGenres] = useState<GenreType[]>([])

    const {getAccessTokenSilently} = useAuth0()
    
    useEffect(() => {
      console.log("funciona")
        const fetchUsers = async () =>{

            const data = await getDataApi("users", getAccessTokenSilently)
            setUser(data)
        }
        fetchUsers()

        const fetchMovies = async () =>{

          const data = await getDataApi("movies", getAccessTokenSilently)
          setMovies(data)
      }
      fetchMovies()

      const fetchGenres = async () =>{

        const data = await getDataApi("genres", getAccessTokenSilently)
        setGenres(data)
      }
      fetchGenres()
    }, [])


    useEffect(()    => {
        console.log(user)
        console.log(movies)
        console.log(genres)
      },[
        user,
      movies,
      genres 
    ])
    
  return (
    
    <>
      {genres.map(genres => (<p>{genres.genre}</p>))}
      {user.map(user => (<p>{user.name}</p>))}
      {
        movies.map(movies => (<Cards key={movies.id} id={movies.id} title={movies.title} score={movies.score} year={movies.year} imageId={movies.imageId} genres={movies.genres} genresArray={movies.genresArray} createdAt={movies.createdAt} updatedAt={movies.updatedAt} usersId={movies.usersId} />))
      }
    
    </>
  )
}
