import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideStyles = ({ rhythm }, options) => ({
  'div': {
    textShadow: null
  },
  'a': {
    color: midShade,
  },
  'a:hover': {
    color: darkAccent
  },
  'body': {
    backgroundColor: lightShade
  },
  'p': {
    marginLeft: '1.0rem',
    marginRight: '1.0rem'
  }
})
const typography = new Typography(lincolnTheme)

export default typography
export const rhythm = typography.rhythm
export const lightShade = '#f1f2f1';
export const lightAccent = '#8e8d94';
export const midShade = '#6e7664';
export const midLightShade = '#939b88';
export const darkAccent = '#32aa96';
export const darkShade = '#1c1c1e';