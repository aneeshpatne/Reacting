import { LoadingSpinner } from "./spinner";
export default function ExamplePage() {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner className="text-blue-500 w-10 h-10" /> {/* Spinner with custom color and size */}
      </div>
    );
  }