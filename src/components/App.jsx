import Header from './HeaderComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import AutorizationPage from 'pages/Autorization/AutorizationPage';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import ContactsPage from 'pages/Contacts/ContactsPage';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { token } from 'service/hosts';
import { reselect, select } from 'store/selectors/selectors';
import { useEffect } from 'react';
import { getContacts } from 'store/contactsReducer/contactsOperations';

const App = () => {
  const authComlete = useSelector(reselect.authenticationComplete);
  const dispatch = useDispatch();
  const uniToken = useSelector(select.token);

  useEffect(() => {
    if (authComlete) {
      token.set(uniToken);
      dispatch(getContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<AutorizationPage isLogin />}></Route>
          <Route path="/register" element={<AutorizationPage />}></Route>
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
