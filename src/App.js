import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components';
import { DeviceWidth } from './contexts/DeviceWidthContext';
import { AddProperty, Affiliate, Contact, ForLease, ForRent, ForSale, Home } from './pages';

function App() {

  const [deviceWidth, setDeviceWidth] = useState(DeviceWidth())
  const [header, setHeader] = useState(<Header deviceWidth={deviceWidth} img_src={deviceWidth < 900 ? './logo.png' : './logo_light.png'} classes='absolute bg-white text-gray-700 lg:bg-main-bg lg:text-white' styles={{color: 'darkgreen'}} />)

  useEffect(() => {

    setDeviceWidth(DeviceWidth())

    const checkScrollAmount = () => {
      let scrollAmount = window.pageYOffset
      if (scrollAmount >= 5 && deviceWidth > 900) {
        setHeader(<Header deviceWidth={deviceWidth} img_src='./logo.png' classes='fixed bg-gray-50 slide-in text-gray-500 shadow-xl' styles={{color: '#019D93'}} />)
      } else {
        setHeader(<Header deviceWidth={deviceWidth} img_src={deviceWidth > 900 ? './logo_light.png' : './logo.png'} classes='absolute bg-white text-gray-700 lg:bg-main-bg lg:text-white' styles={{color: 'darkgreen'}} />)
      }
    }
    window.addEventListener('scroll', checkScrollAmount)

  }, [header])

  return (
    <BrowserRouter>
      <div>
        {header} 
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/for_sale' element={<ForSale />} />
        <Route path='/for_rent' element={<ForRent />} />
        <Route path='/for_lease' element={<ForLease />} />
        <Route path='/agency' element={<AddProperty />} />
        <Route path='/affiliate' element={<Affiliate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
