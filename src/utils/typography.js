import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideStyles = ({ rhythm }, options) => ({
  'div': {
    textShadow: null
  },
  'a': {
    color: 'black'
  }
})
const typography = new Typography(lincolnTheme)

export default typography
export const rhythm = typography.rhythm