type Validation = 'UsernameError' | 'PasswordError' | 'Success';

function usernameValidationCheck(username: string) {
  return username.length >= 2;
}

function passwordValidationCheck(password: string) {
  return password.length >= 8;
}

export const validationCheckWithEmailPassword = (username: string, password: string): Validation => {
  if (!usernameValidationCheck(username)) return 'UsernameError';
  if (!passwordValidationCheck(password)) return 'PasswordError';
  return 'Success';
};
