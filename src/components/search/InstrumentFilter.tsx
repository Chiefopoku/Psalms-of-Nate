import { Dropdown } from "@/components/ui/dropdown";
import { instruments } from "@/data/instruments";

export function InstrumentFilter() {
  return <Dropdown label="Instrument" options={["Any instrument", ...instruments]} />;
}
