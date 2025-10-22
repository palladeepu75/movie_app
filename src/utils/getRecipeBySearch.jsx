
export const getRecipeBySearch=(movies,value)=>{
 const filteredMovies=value.length>0?movies.filter(movie=>movie.name.toLowerCase().includes(value.toLowerCase())||movie.cuisine.toLowerCase().includes(value.toLowerCase())):movies

 return filteredMovies
}