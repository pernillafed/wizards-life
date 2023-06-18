export const validateAuthInformation = (
  email: string,
  password: string,
  confirmedPassword?: string
): string => {
  if (email === "" || password === "" || confirmedPassword === "") {
    return "All fields must be filled in";
  }

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    return "E-mail address is formatted incorrectly";
  }

  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g)) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  if (confirmedPassword && password !== confirmedPassword) {
    return "Passwords must match";
  }

  return "";
};
