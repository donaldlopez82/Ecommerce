import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
function App() {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
       <NavigationBar/>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
