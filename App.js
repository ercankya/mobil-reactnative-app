import Route from './src/Route';
import React from 'react';
import {AuthProvider} from "./src/navigation/AuthProvider"

const App = () => {
  return (
  <AuthProvider>
    <Route />
  </AuthProvider>
  )
};
export default App;
