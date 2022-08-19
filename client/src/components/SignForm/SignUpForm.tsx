import React, { useState, useEffect } from 'react';
import { validationCheckWithEmailPassword } from 'src/validation/validationCheck';
import { SignContainer } from 'src/style/SignContainer.styled';
import { TextField, Button } from '@mui/material';

interface SignFormProps {
  submitAction: (nickname: string, email: string, password: string, password2: string) => Promise<void>;
  submitButtonText: string;
}

const SignUpForm = ({ submitAction, submitButtonText }: SignFormProps) => {
  const [nickname, setNickname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleNicknameChange = ({ target: { value } }) => setNickname(value);
  const handleUsernameChange = ({ target: { value } }) => setUsername(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  const handlePassword2Change = ({ target: { value } }) => setPassword2(value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    switch (validationCheckWithEmailPassword(username, password)) {
      case 'Success':
        await submitAction(nickname, username, password, password2);
        break;
      case 'UsernameError':
        alert('Please enter a valid username');
        break;
      case 'PasswordError':
        alert('Please enter a valid password');
        break;
      default:
        break;
    }
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setIsButtonDisabled(false);
    }
  }, [username, password]);

  return (
    <SignContainer onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="nickname"
        value={nickname}
        onChange={handleNicknameChange}
        id="outlined-basic"
        label="nickname"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="email"
        name="email"
        value={username}
        onChange={handleUsernameChange}
        id="outlined-basic"
        label="e-mail"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="password"
        name="password"
        autoComplete="off"
        value={password}
        onChange={handlePasswordChange}
        id="outlined-basic"
        label="password"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="password"
        name="password2"
        autoComplete="off"
        value={password2}
        onChange={handlePassword2Change}
        id="outlined-basic"
        label="password2"
        variant="outlined"
        fullWidth
      />
      <Button className="Button" fullWidth type="submit" variant="contained" disabled={isButtonDisabled}>
        {submitButtonText}
      </Button>
    </SignContainer>
  );
};

export default SignUpForm;
