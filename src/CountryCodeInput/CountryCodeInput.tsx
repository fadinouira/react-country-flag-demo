import { CountryCodes } from '@fadi-ui/react-country-flag';
import { ChangeEvent, useState } from 'react';
import './CountryCodeInput.css';
import { CountryCodeInputProps } from './CountryCodeInput.type';

export default function CountryCodeInput({ value, onChange }: CountryCodeInputProps) {
  const [currentValue, setCurrentValue] = useState<string>(value);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Example: Validate if the input is a valid country code (you may need to adjust this based on your country code logic)
    const isValidCountryCode = /^[A-Za-z]{2}$/.test(inputValue);
    setCurrentValue(inputValue);

    if (isValidCountryCode) {
      setError(null);
      onChange(inputValue as CountryCodes);
    } else {
      setError('Invalid country code');
    }
  };

  return (
    <div className="country-code-input-container">
      Country:{' '}
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder="Enter country code"
        className={error ? 'error' : ''}
      />
      <div>{error && <span className="error-message">{error}</span>}</div>
    </div>
  );
}
