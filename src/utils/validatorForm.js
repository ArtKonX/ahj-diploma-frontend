export default function validatorForm(type, data) {
  if (type === "email") {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    if (data.match(emailRegex)) {
      return {
        valid: true,
        message: "Email address is valid.",
      };
    } else {
      return {
        valid: false,
        message: "Invalid email address.",
      };
    }
  } else if (type === "password") {
    if (data.length >= 8) {
      return {
        valid: true,
        message: "Password is valid.",
      };
    } else {
      return {
        valid: false,
        message: "Password must be at least 8 characters long.",
      };
    }
  }
}
