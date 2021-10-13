import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';


// Create a theme instance.
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(255, 255, 255, 0.08)',//'#1f232a',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#303030',
        },
    },
    typography: {
        fontFamily: 'Segoe UI'
    },
    overrides: {
        MuiListItem: {
            root: {
                marginRight: '8px',
                '&$selected': {
                    backgroundColor: '#1f232a'
                },

            },
            button: {
                '&:hover': {
                    backgroundColor: '#1f232a',
                        
                },
                 '&$selected': {
                    backgroundColor: '#1f232a'
                },

            }

        },
        MuiListItemText: {
            primary: {
                color: 'lightgray',
                fontSize: '18px',
            },
            secondary: {
                color: 'lightgray',
                fontSize: '14px'
            }
        },
      
        MuiListItemSecondaryAction: {
            root: {
                 //display: 'none',
                color: 'gray'
                /*'&:hover': {
                    display: 'flex'
                }*/
            }
        }
      
    },

});

export default theme;
