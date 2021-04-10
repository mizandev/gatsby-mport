/** @jsx jsx */
import { Box, NavLink, useColorMode, jsx } from "theme-ui"

const Navlinks = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    <Box as="nav" variant="nav">
      <NavLink p={2}>
        <button
          sx={{
            position: `static`,
            variant: `buttons.toggle`,
            fontWeight: `semibold`,
            display: `block`,
            mx: `auto`,
            mb: 3,
            zIndex: 99,
          }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
      </NavLink>
    </Box>
  )
}

export default Navlinks;
