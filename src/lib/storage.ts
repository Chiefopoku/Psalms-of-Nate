import { getStorage } from "firebase/storage";
import { getFirebaseApp } from "./firebase";

export function getAppStorage() {
  return getStorage(getFirebaseApp());
}
