import { FunctionComponent, PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { SideLinks } from '../side-links';

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SideLinks />
      {/* <Footer /> */}
    </>
  );
};
