import { useQuery } from "@tanstack/react-query";

export function useGetAcademies() {
  const { data: academiesData, isLoading } = useQuery({
    queryKey: ["academies"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/academies`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );
        const { data } = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { academiesData, isLoading };
}
