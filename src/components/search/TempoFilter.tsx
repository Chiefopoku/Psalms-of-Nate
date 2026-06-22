import { Dropdown } from "@/components/ui/dropdown";
import { tempos } from "@/data/tempos";

export function TempoFilter() {
  return <Dropdown label="Tempo" options={["Any tempo", ...tempos]} />;
}
