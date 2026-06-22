import { Dropdown } from "@/components/ui/dropdown";
import { moods } from "@/data/moods";

export function MoodFilter() {
  return <Dropdown label="Mood" options={["Any mood", ...moods]} />;
}
