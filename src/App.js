import React from 'react';
import './App.css';
import MyRoutes from './MyRoutes';
import { BrowserRouter
 } from 'react-router-dom';
 import { QueryClient, QueryClientProvider } from 'react-query';

 

 // Create a new queryClient instance
const queryClient = new QueryClient();

function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <MyRoutes/>
      </BrowserRouter>
    </QueryClientProvider>
    
        
  );
}

export default App;
