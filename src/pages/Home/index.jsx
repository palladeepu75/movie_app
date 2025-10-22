import { useEffect } from "react";
import Navbar from "../../components/Navbar"
import MovieCard from "../../components/MovieCart";
import { useDispatch,useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getRecipeBySearch } from "../../utils/getRecipeBySearch";

// export default function Home (){
//     return(
//         <>
//         <Navbar/>
//         </>
//     )
// }

//normal js syntax 
const Home=()=>{
   const dispatch=useDispatch()

   const {movies,searchValue}=useSelector(state=>state.movies)
  //  console.log(movies);
  const filterByRecipeName=getRecipeBySearch(movies,searchValue)

   useEffect(()=>{
     dispatch(getMovies())
   },[])

    return( 
        <>
         <Navbar/>
        <Box sx={{ flexGrow: 1, margin:2,marginTop:10,padding:2 }}>
           <Grid container spacing={2}>
           {
            filterByRecipeName.length>0&&filterByRecipeName.map(movie=><MovieCard key={movie.id} movie={movie}/>)
           }
          </Grid>
        </Box>
        </>
    )
}
export default Home;



