"use client";

import useFetchTask from "@/hooks/useFetchTask";
import { useParams } from "next/navigation";

const SingleTaskPage = () => {
  const { id } = useParams();
  const { task, loading, error } = useFetchTask(id as string);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="text-lg text-red-500">{error}</span>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <p className="text-lg text-black">No data found</p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Task Verification
        </h2>
        <p className="mb-6 text-gray-600">
          To complete this task, you need to verify your identity through Self
          Protocol. Clicking the button below will redirect you to Self, where
          you can securely finish the verification process.
        </p>
        <a
          href={task?.deepLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-teal-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition text-center inline-block"
        >
          Verify Through Self
        </a>
      </div>
    </div>
  );
};

export default SingleTaskPage;
