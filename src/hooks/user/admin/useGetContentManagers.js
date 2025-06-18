import { useQuery } from "@tanstack/react-query";

export function useGetContentManagers() {
  const { data: contentManagersData, isLoading } = useQuery({
    queryKey: ["content-managers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/content-managers`,
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

  return { contentManagersData, isLoading };
}
