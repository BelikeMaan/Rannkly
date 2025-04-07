import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

const App = () => (
  <Router>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/main/dashboard" element={<Dashboard/>} />
      <Route path="/main/analytics" element={<h1 className='p-4 ml-64'>Analytics</h1>} />
      <Route path="/main/settings" element={<h1 className='p-4 ml-64'>settings</h1>} />
      <Route path="/main/social-media" element={<h1 className='p-4 ml-64'>Social Media</h1>} />
      <Route path="/main/surveys" element={<h1 className='p-4 ml-64'>Surveys</h1>} />
      <Route path="/management/dashboard" element={<h1 className='p-4 ml-64'>Dashboard</h1>} />
      <Route path="/management/analytics" element={<h1 className='p-4 ml-64'>Analytics</h1>} />
      <Route path="/management/settings" element={<h1 className='p-4 ml-64'>settings</h1>} />
      <Route path="/management/social-media" element={<h1 className='p-4 ml-64'>Social Media</h1>} />
      <Route path="/management/surveys" element={<h1 className='p-4 ml-64'>Surveys</h1>} />
    </Routes>
  </Router>
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
);
