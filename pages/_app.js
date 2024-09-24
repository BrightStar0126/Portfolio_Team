// Librairies
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Components
import { ProjectProvider } from '@/context/projectContext';
import Navbar from '@/components/Navbar';

// MAIN FUNCTION
export default function App({ Component, pageProps }) {
  return (
    <>
      <ProjectProvider>
        <Navbar />
        <Component {...pageProps} />
      </ProjectProvider>
      <ToastContainer
        autoClose='6000'
        position='bottom-right'
        theme='dark'
      />
    </>
  );
}
