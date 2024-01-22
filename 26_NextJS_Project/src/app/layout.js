import MainNavigation from '@/components/layout/MainNavigation';
import classes from '@/components/layout/Layout.module.css';
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
