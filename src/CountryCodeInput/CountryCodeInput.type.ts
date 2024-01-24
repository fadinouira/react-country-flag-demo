import { CountryCodes } from '@fadi-ui/react-country-flag';

export interface CountryCodeInputProps {
  value: CountryCodes;
  onChange: (value: CountryCodes) => void;
}
