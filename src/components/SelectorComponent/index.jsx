import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectorComponent({ name, value }) {
  const [selected, setSelected] = React.useState('');
  // console.log(selected);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
        <Select
          labelId={`${name}-select-label`}
          id={`${name}-select`}
          value={selected}
          label={name}
          onChange={handleChange}
        >
          {value?.length > 0 ? (
            value.map((item, i) => {
              const displayValue =
                name.toLowerCase().includes('types')
                  ? item.types || item
                  : item.ratings || item;

              return (
                <MenuItem key={i} value={displayValue}>
                  {displayValue}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem disabled>No options</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

