import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '@redwoodjs/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBar = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  const classes = useStyles();

  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
          <button onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
          {isAuthenticated && <p>{currentUser.email}</p>}
      </Toolbar>
    </MaterialAppBar>
  )
}

export default AppBar
