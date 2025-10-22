import { styled, alpha } from "@mui/material/styles";
import {AppBar, Box, Toolbar, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SelectorComponent from "../SelectorComponent";
import { useDispatch,useSelector} from "react-redux";
import { setSearchValue, setTypes } from "../../slice/movieSlice";
// import { getRecipeBySearch } from "../../api/movies";
import {debounce} from 'lodash';
import { useEffect } from "react";
// import { getMovies } from "../../api/movies";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {

  const dispatch=useDispatch();
      //Debouncing ---> it is optimization teqnique
      // Set a limit to call an value or api
      //set a limit to no of times invoke a function
      //instead of settimeout import lodash
    const onSearchChange= debounce((e)=>{
      // setTimeout(() => {
      //      dispatch(setSearchValue(e.target.value))
      //     //(only when we work with search params)
      //     //  dispatch(getRecipeBySearch(e.target.value)) 
      // }, 1500)
      dispatch(setSearchValue(e.target.value))      
    },500);
    //  const {searchValue}=useSelector(state=>state.movies)
    //  console.log(searchValue);
  useEffect(()=>{
      dispatch(setTypes())
    },[])

    const {types}=useSelector(state=>state.movies)
    // console.log(types);

    

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{padding:1}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Movie Recipes App
          </Typography>
          <Search onChange={onSearchChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
          <SelectorComponent name='Types' value={types}/>
          <SelectorComponent name='Ratings' value={[]}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
