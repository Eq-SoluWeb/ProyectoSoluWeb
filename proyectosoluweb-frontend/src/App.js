import './App.css';
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div >
     <BrowserRouter>
        <AuthProvider>
        <Layout>
          <AppRouter />
          </Layout>
        </AuthProvider>
   </BrowserRouter>
    </div>

  );
}

export default App;
