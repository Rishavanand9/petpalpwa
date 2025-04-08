const ERROR_MESSAGES = {
    'EMAIL_PHONE': 'Enter a valid email or 10-digit phone number',
    'PASSWORD': 'Password must be at least 8 characters, include letters and numbers',
}

const validateEmailPhone = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return ERROR_MESSAGES.EMAIL_PHONE;
    }
    return '';
  };

  const validatePassword = (value: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(value)) {
      return ERROR_MESSAGES.PASSWORD;
    }
    return '';
  };

  export { validateEmailPhone, validatePassword };