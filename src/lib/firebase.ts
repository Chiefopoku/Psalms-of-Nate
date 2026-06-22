import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { env } from "./env";

let app: FirebaseApp | null = null;

export function getFirebaseApp() {
  if (app) return app;
  if (getApps().length) {
    app = getApps()[0];
    return app;
  }

  app = initializeApp(env.firebase);
  return app;
}
