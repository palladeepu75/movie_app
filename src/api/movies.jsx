import axios from "axios"
import { setMovies,setTypes } from "../slice/movieSlice"


const BaseURL="https://dummyjson.com/recipes"

export const getMovies=()=>async dispatch =>{  
   try{
     const {data:{recipes}}=await axios.get(BaseURL)
   //   console.log(recipes);
    dispatch(setMovies(recipes))
    // const cuisines=recipes.map(r=>r.cuisine)
    //or (Set--->because we want unique values)
    const cuisines = [...new Set(recipes.map(({ cuisine }) => cuisine))];
    // console.log(cuisines);
    dispatch(setTypes(cuisines))

    return data;
   }
   catch(err){
    return err
   }
}


// export const getRecipeBySearch=(value)=>async dispatch=>{
//   const url=BaseURL+'./search' //its not working because we won't this url path in database
//   try{
//     const {data:{recipes}}=await axios.get(url,{params:{
//       search:value
//     }})
//     dispatch(setMovies(recipes))
//     console.log(recipes);
//   }catch(err){
//     return err
//   }

// }