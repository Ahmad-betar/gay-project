import { Database } from "lucide-react";

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Database className="w-20 h-20" />
      <p className="text-4xl">There Is No Data</p>
    </div>
  );
};

export default NoData;
