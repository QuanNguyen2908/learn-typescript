import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import WellcomeMessage from "./WellcomeMessage";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

const useStyle = makeStyles((theme: Theme) => createStyles ({
    positionSelect: {
        color:'white',
        borderBottom: '1px solid white'
    }
}))

const Navbar = () => {
  const [position, setPosition] = useState<string>("Full-stack Developer");
  const [time, setTime] = useState<Date>(() =>new Date(Date.now()));

  useEffect(() => {
      const timer = setInterval(() =>setTime(() => new Date(Date.now())))
      return () => clearInterval(timer) 
  },[])

  const classes = useStyle()
  const onPositionCHange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => {
    setPosition(event.target.value as string);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WellcomeMessage position={position} country="Ha noi" />
            <Box>
              <FormControl>
                <Select value={position} onChange={onPositionCHange} className={classes.positionSelect} >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
              <Box my={1}>
                  <Typography variant='h6'>
                      {time.toUTCString()}
                  </Typography>
              </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
