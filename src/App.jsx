import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import CreateTrip from './pages/CreateTrip/CreateTrip';
import { Toaster } from 'sonner';
import ViewTrip from './components/ViewTrip/[tripId]';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/view-trip/:tripId" element={<ViewTrip />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
