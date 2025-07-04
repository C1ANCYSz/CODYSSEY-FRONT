import { useQuery } from "@tanstack/react-query";

export function useGetStudent() {
  const {
    data: studentData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/student/dashboard`,
          {
            credentials: "include",
          },
        );
        const data = await res.json();
        return data.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  return { studentData, isLoading, error };
}
