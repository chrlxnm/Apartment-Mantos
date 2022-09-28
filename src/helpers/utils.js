import { encryptStorage } from "./services";
import { useState } from "react";

export function useUserInfo() {
  const getUserInfo = () => {
    const userInfoString = encryptStorage.getItem("loginToken");
    const userUserInfo = userInfoString;
    return userUserInfo;
  };

  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveUserInfo = (userUserInfo) => {
    encryptStorage.setItem("loginToken", userUserInfo);
    sessionStorage.setItem("loginToken", userUserInfo);
    setUserInfo(userUserInfo);
  };

  return {
    setUserInfo: saveUserInfo,
    userInfo,
  };
}

export const getCurrentTab = (path) => {
  switch (path) {
    case "/home":
      return ["home"];
    case "/report":
      return ["report"];
    case "/transactions":
      return ["transactions"];
    case "/residents":
      return ["residents"];
    default:
      return ["home"];
  }
};
