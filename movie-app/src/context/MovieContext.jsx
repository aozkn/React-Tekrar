import React, { createContext } from 'react'


const MovieContext = createContext()
const MovieContextProvider = ({children}) => {
  return (
    <MovieContext.Provider values={null}>{children}</MovieContext.Provider>
  )
}

export default MovieContextProvider