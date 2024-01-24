import { CountryCodes, ReactCountryFlag } from '@fadi-ui/react-country-flag';
import './App.css';
import CountryCodeInput from './CountryCodeInput/CountryCodeInput';
import { useState } from 'react';

function App() {
  const [countryCode, setCountryCode] = useState<CountryCodes>('TN');
  return (
    <>
      <h1>react-country-flag (Demo)</h1>
      <div className="card">
        <h2>Country Flags</h2>
        <ReactCountryFlag countryCode="US" height={27} width={37.5} />{' '}
        <ReactCountryFlag countryCode="fr" height={27} width={37.5} />{' '}
        <ReactCountryFlag countryCode="tn" height={27} width={37.5} />
        <h2>Test country codes</h2>
        <p>Current: "{countryCode}"</p>
        <CountryCodeInput value={countryCode} onChange={setCountryCode} />
        <ReactCountryFlag countryCode={countryCode} height={18} width={25} />
      </div>
    </>
  );
}

export default App;
