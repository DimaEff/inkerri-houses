import {withStyles, createTheme} from "@material-ui/core";


const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiButton-root': {
            fontSize: '1rem',
        },
    },
})(() => null);

const theme = createTheme({
    props: {
      MuiButton: {
          disableElevation: true,
      }
    },
    palette: {
        primary: {
            main: '#3E3E3E',
        },
        secondary: {
            main: '#FFFFFF',
        },
        error: {
            main: '#DB4D30',
        }
    },
    overrides: {
        MuiTextField: {
            root: {
                border: 'none',
                outline: 'none',
            }
        }
    }
});

// theme.props = {
//     MuiButton: {
//         disableElevation: true,
//     },
//     MuiCard: {
//         elevation: 2,
//     },
// }

// theme.overrides = {
//     MuiButton: {
//         root: {
//             borderRadius: '30px',
//             textTransform: 'none',
//         },
//     },
//     MuiButtonGroup: {
//         root: {
//             borderRadius: '30px',
//         }
//     },
//
//     MuiCard: {
//         root: {
//             borderRadius: '20px',
//         },
//
//     },
//     MuiCardMedia: {
//         root: {
//             marginLeft: '5px',
//             marginRight: '5px',
//             borderRadius: '20px',
//         }
//     },

    // MuiCollapse: {
    //     entered: {
    //         border: '1px solid red'
    //     },
    //     hidden: {
    //         color: 'green',
    //         border: '1px solid green'
    //     },
    //     wrapper: {
    //         border: '1px solid blue',
    //     }
    // }
// };

export default theme;