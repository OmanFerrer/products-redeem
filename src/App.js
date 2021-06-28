import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, setUser } from './redux/slices/userSlice';
import { useGetUserQuery } from './services/api';

import Header from './components/layout/Header';
import ProductsPage from './pages/products/ProductsPage';

function App() {
  const dispatch = useDispatch();
  const { isSuccess: successUser, data: userData } = useGetUserQuery();
  const user = useSelector(getUser);

  useEffect(() => {
    successUser && dispatch(setUser(userData));
  }, [successUser, userData, dispatch]);

  return (
    <div id="app" className="bg-gray-100">
      <Header user={user}/>      
      <ProductsPage user={user}/>
    </div>
  );
}

export default App;
