import { getAuth } from "firebase/auth";
import { getFirebaseApp } from "./firebase";

export function getAppAuth() {
  return getAuth(getFirebaseApp());
}
