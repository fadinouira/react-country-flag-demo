import { ChangeEvent, useState } from 'react';
import './SizeInput.css';
import { SizeInputProps } from './SizeInput.type';

export default function SizeInput({ value, onChange }: SizeInputProps) {
  const [currentValue, setCurrentValue] = useState<string>(value.toString());
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setCurrentValue(inputValue);
    try {
      const newValue = Number(inputValue);
      onChange(Number(newValue));
    } catch (error) {
      setError('Invalid country code');
    }
  };

  return (
    <div className="country-code-input-container">
      Size:{' '}
      <input
        type="number"
        value={currentValue}
        onChange={handleChange}
        placeholder="Enter country flag size"
        className={error ? 'error' : ''}
      />
      <div>{error && <span className="error-message">{error}</span>}</div>
    </div>
  );
}
