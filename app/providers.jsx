import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return <ThemeProvider defaultTheme="mytheme">{children}</ThemeProvider>;
}
