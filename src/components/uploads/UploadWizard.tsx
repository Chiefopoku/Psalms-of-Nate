import { FileDropzone } from "./FileDropzone";
import { MetadataForm } from "./MetadataForm";
import { UploadProgress } from "./UploadProgress";

export function UploadWizard() {
  return (
    <div className="grid gap-6">
      <FileDropzone />
      <MetadataForm />
      <UploadProgress progress={0} />
    </div>
  );
}
