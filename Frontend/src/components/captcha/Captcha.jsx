import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const Captcha = () => {
  // State to store the generated CAPTCHA code
  const [captchaCode, setCaptchaCode] = useState(generateCaptchaCode());
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to generate a random 6-digit CAPTCHA code
  function generateCaptchaCode() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  }

  // Handle input change
  const handleInputChange = (event) => {  
    setUserInput(event.target.value);
  };

  // Handle CAPTCHA verification
  const handleVerifyCaptcha = () => {
    if (parseInt(userInput) === captchaCode) {
      setIsVerified(true);
      setErrorMessage('');
    } else {
      setIsVerified(false);
      setErrorMessage('Incorrect CAPTCHA. Please try again.');
    }
  };

  // Handle refreshing the CAPTCHA
  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptchaCode());
    setUserInput('');
    setIsVerified(false);
    setErrorMessage('');
  };

  return (
    <div className="captcha-container">
      <div className='mb-2'>
        <Label>Enter the CAPTCHA code:</Label>
        <div className="captcha-code">
          <strong>{captchaCode}</strong>
        </div>
      </div>
      <Input
        type="number"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter CAPTCHA code"
      />
      {isVerified && <p>Captcha Verified Successfully!</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className='flex gap-2 mt-4'>
        <Button onClick={handleVerifyCaptcha} className="flex-1">Verify</Button>
        <Button onClick={handleRefreshCaptcha} className="flex-1">Refresh CAPTCHA</Button>
      </div>
    </div>
  );
};

export default Captcha;
