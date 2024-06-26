export const CheckValidateData = (email,password) => {
   const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const isPassValid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   if(!isEmailValid) return "Email is not valid"
   if(!isPassValid) return "Password must be 8-32 and should include 1 uppercase , lowercase letter, digit and a special character from @$!%*?&."
    return null;
}
