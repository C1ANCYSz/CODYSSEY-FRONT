import { useQuery } from "@tanstack/react-query";

export function useGetCertificates() {
  const {
    data: certificates,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["certificates"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/student/certificates`,
          {
            credentials: "include",
          },
        );
        const { data } = await res.json();
        return data.certificates;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  return { certificates, isLoading, error };
}
