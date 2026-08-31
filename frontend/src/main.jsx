import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './LandingPage/Home/HomePage'
import Navbar from './Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomePage />
  </StrictMode>,
)

//  <BrowserRouter>
//     
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         </Routes>
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<PageNotFound />} />
//       <Footer />
//     </BrowserRouter>