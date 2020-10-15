import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  menuButton: {
    backgroundColor: "#ffff",
    "&:hover": {
      color: "#ef7916",
    },
  },
  menuIcon: {
    color: "#2c292a",
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#ef7916",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function HiddenMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.menuButton}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="home">
          <StyledMenuItem className={classes.menuItem}>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </Link>

        <Link to="courses">
          <StyledMenuItem>
            <ListItemText primary="Temas" />
          </StyledMenuItem>
        </Link>

        <Link to="teachers">
          <StyledMenuItem>
            <ListItemText primary="Professores" />
          </StyledMenuItem>
        </Link>
        
        <Link to="plans">
          <StyledMenuItem>
            <ListItemText primary="Planos" />
          </StyledMenuItem>
        </Link>


      </StyledMenu>
    </div>
  );
}
