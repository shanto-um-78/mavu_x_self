import { Task } from "@/types/task";
import { useEffect, useState } from "react";

const useFetchTask = (taskId: string) => {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://minipay-api-dev.mavu.work/v1";
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiBaseUrl}/tasks/public-task/${taskId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.NEXT_PUBLIC_MINIPAY_SECRET_TOKEN
              ? {
                  "x-minipay-token":
                    process.env.NEXT_PUBLIC_MINIPAY_SECRET_TOKEN,
                }
              : {}),
          },
        }
      );
      const data = await response.json();
      setTask(data?.data);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { task, loading, error };
};

export default useFetchTask;
