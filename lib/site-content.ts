export const navigation = [
  { href: "#why-hatch", label: "Why Hatch" },
  { href: "#community", label: "Community" },
];
export const accountLinks = {
  login: import.meta.env.VITE_HATCH_LOGIN_URL || "/account?mode=login",
  signup: import.meta.env.VITE_HATCH_SIGNUP_URL || "/account?mode=signup",
};
