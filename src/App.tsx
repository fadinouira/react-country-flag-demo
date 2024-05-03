import { CountryCodes, ReactCountryEmoji, ReactCountryFlag } from '@fadi-ui/react-country-flag';
import { useState } from 'react';
import './App.css';
import CountryCodeInput from './CountryCodeInput/CountryCodeInput';
import SizeInput from './SizeInput/SizeInput';

function App() {
  const [countryCode, setCountryCode] = useState<CountryCodes>('TN');
  const [size, setSize] = useState<number>(50);

  return (
    <>
      <h1>react-country-flag (Demo)</h1>
      <div className="card">
        <h2>Country Flags</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactCountryFlag countryCode="US" size={40} />
          <ReactCountryFlag countryCode="fr" height={27} width={37.5} style={{ marginLeft: 5 }} />
          <ReactCountryFlag countryCode="tn" height={27} width={37.5} style={{ marginLeft: 5 }} />
        </div>
        <h2>Country Emojis</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactCountryEmoji countryCode="US" size={40} />
          <ReactCountryEmoji countryCode="fr" size={40} style={{ marginLeft: 5 }} />
          <ReactCountryEmoji countryCode="tn" size={40} style={{ marginLeft: 5 }} />
        </div>
        <h2>Test country codes</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            width: 293,
          }}
        >
          <CountryCodeInput value={countryCode} onChange={setCountryCode} />
          <SizeInput value={size} onChange={setSize} />
        </div>
        <ReactCountryFlag countryCode={countryCode} size={size} style={{ marginTop: 5 }} />
        <ReactCountryEmoji countryCode={countryCode} size={size} style={{ marginTop: 5 }} />
      </div>
    </>
  );
}

export default App;
