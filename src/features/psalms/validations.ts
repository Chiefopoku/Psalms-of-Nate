import { requireString } from "@/lib/validations";

export function validatePsalmTitle(value: unknown) {
  return requireString(value, "Psalm title");
}
