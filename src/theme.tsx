import { PaletteMode } from "@mui/material";
import * as color from "@mui/material/colors";

// color design tokens export
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: color.indigo,
          divider: color.grey[300],
          background: {
            default: "#fffefe",
            paper: color.indigo[200],
          },
          text: {
            primary: "#0f121f",
          },
        }
      : {
          // palette values for dark mode
          primary: color.indigo,
          divider: color.grey[800],
          background: {
            default: "#0f121f",
            paper: color.indigo[600],
          },
          text: {
            primary: "#fffefe",
          },
        }),
  },
});

// export const useMode = () => {
//   const [mode, setMode] = useState<PaletteMode>("light");
//   const colorMode = useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode: PaletteMode) =>
//           prevMode === "light" ? "dark" : "light"
//         );
//       },
//     }),
//     []
//   );

//   // Update the theme only if the mode changes
//   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   return [theme, colorMode];
// };
