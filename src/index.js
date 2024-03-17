import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kalli from './Bosses/Last Wish/kalli';
import ShuroChi from './Bosses/Last Wish/shuro-chi';
import Morgeth from './Bosses/Last Wish/morgeth';
import Riven from './Bosses/Last Wish/riven';
import ConsecratedMind from './Bosses/Garden of Salvation/consecrated-mind';
import SanctifiedMind from './Bosses/Garden of Salvation/sanctified-mind';
import Atraks from './Bosses/Deep Stone Crypt/atraks';
import Taniks from './Bosses/Deep Stone Crypt/taniks';
import Templar from './Bosses/Vault of Glass/templar';
import Atheon from './Bosses/Vault of Glass/atheon';
import Caretaker from './Bosses/Vow of the Disciple/caretaker';
import Rhulk from './Bosses/Vow of the Disciple/rhulk';
import Warpriest from './Bosses/Kings Fall/warpriest';
import Golgoroth from './Bosses/Kings Fall/golgoroth';
import Daughters from './Bosses/Kings Fall/daughters';
import Oryx from './Bosses/Kings Fall/oryx';
import Explicator from './Bosses/Root of Nightmares/explicator';
import Nezerac from './Bosses/Root of Nightmares/nezerac';
import IrYut from './Bosses/Crotas End/ir-yut';
import Crota from './Bosses/Crotas End/crota';
import InvalidInput from './Bosses/invalidInput';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';

/*
Creating the HashRouter for the website
Too add another page, first import the page at the top of the file, then add a new object to the array below
The formate is as follows:
{
  path: "/name-of-the-page",
  element: <Name of the imported function/>
}
*/
const router = createHashRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/kalli",
      element: <Kalli/>
    },
    {
      path: "/shuro-chi",
      element: <ShuroChi/>
    },
    {
      path: "/morgeth",
      element: <Morgeth/>
    },
    {
      path: "/riven",
      element: <Riven/>
    },
    {
      path: "/consecrated-mind",
      element: <ConsecratedMind/>
    },
    {
      path: "/sanctified-mind",
      element: <SanctifiedMind/>
    },
    {
      path: "/atraks",
      element: <Atraks/>
    },
    {
      path: "/taniks",
      element: <Taniks/>
    },
    {
      path: "/templar",
      element: <Templar/>
    },
    {
      path: "/atheon",
      element: <Atheon/>
    },
    {
      path: "/caretaker",
      element: <Caretaker/>
    },
    {
      path: "/rhulk",
      element: <Rhulk/>
    },
    {
      path: "/warpriest",
      element: <Warpriest/>
    },
    {
      path: "/golgoroth",
      element: <Golgoroth/>
    },
    {
      path: "/daughters",
      element: <Daughters/>
    },
    {
      path: "/oryx",
      element: <Oryx/>
    },
    {
      path: "/explicator",
      element: <Explicator/>
    },
    {
      path: "/nezerac",
      element: <Nezerac/>
    },
    {
      path: "/ir-yut",
      element: <IrYut/>
    },
    {
      path: "/crota",
      element: <Crota/>
    },
    {
      path: "/invalid",
      element: <InvalidInput/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
