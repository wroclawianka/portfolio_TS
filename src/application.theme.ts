import { extendTheme } from '@chakra-ui/react';
import {
  aboutMeNewTheme,
  animatedAvatarTheme,
  footerTheme,
  headerTheme,
  introTheme,
  projectsTheme,
  stackTheme,
  windowTheme
} from './components';
import { sideLinksTheme } from './components/side-links';

export const theme = extendTheme({
  components: {
    ...footerTheme,
    ...headerTheme,
    ...introTheme,
    ...stackTheme,
    ...sideLinksTheme,
    ...windowTheme,
    ...projectsTheme,
    ...animatedAvatarTheme,
    ...aboutMeNewTheme
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  }
});
