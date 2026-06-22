import { Dropdown } from "@/components/ui/dropdown";

export function ReleaseStatusFilter() {
  return <Dropdown label="Status" options={["Any status", "Released", "Unreleased"]} />;
}
