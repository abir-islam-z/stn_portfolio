import { AlertTriangle } from "lucide-react";

export default function Error({ error }: { error: string }) {
  <div className="bg-amber-500/10 border border-amber-500/30 rounded-md p-3 mb-8 text-amber-200 text-sm">
    <p className="flex items-center">
      <AlertTriangle className="size-4 mr-2" />
      {error}
    </p>
  </div>;
}
