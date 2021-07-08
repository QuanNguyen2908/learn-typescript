import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Chip,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import WellcomeMessage from "./WellcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { ProgressContext } from "./context/ProgressContext";
import { ThemeContext } from "./context/ThemeContext";
import ToggoleThemeBtn from "./ToggoleThemeBtn";

const useStyle = makeStyles((theme: Theme) => createStyles({
  positionSelect: {
    color: 'white',
    borderBottom: '1px solid white'
  }
}))

const Navbar = () => {
  const [position, setPosition] = useState<string>("Full-stack Developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const { lastTime, status } = useContext(ProgressContext)
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    const timer = setInterval(() => setTime(() => new Date(Date.now())))
    return () => clearInterval(timer)
  }, [])

  const classes = useStyle()
  const onPositionCHange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => {
    setPosition(event.target.value as string);
  };
  return (
    <AppBar position="static" color={theme}>
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
            <Chip label={`Last time working in this project :${lastTime} - status: ${status}`}></Chip>
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
      <ToggoleThemeBtn></ToggoleThemeBtn>
    </AppBar>
  );
};

export default Navbar;
