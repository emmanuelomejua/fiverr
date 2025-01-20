import { useQuery } from "@tanstack/react-query";
import SERVER from "./server";




export const useGetSingleGig = (id: any) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['singleGig'],
        queryFn: async () => {
          const res = await SERVER.get(`gig/find/${id}`);
          return res.data;
        }
      })

      return  { data, isPending, error }
}



export const useGetAllGigs = (filters: any, sort: any, search: any) => {
    const { error, data, isPending, refetch } = useQuery({
        queryKey: ['gigs', filters],
        queryFn: async () => {
          const queryParams = [];
          if (filters.min) queryParams.push(`min=${filters.min}`);
          if (filters.max) queryParams.push(`max=${filters.max}`);
          if(sort) queryParams.push(`${sort}`)
          const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';
          const res = await SERVER.get(`gig?${search}${queryString}`);
          return res.data;
        }
      });

      return { error, data, isPending, refetch }
}



export const useSingleUser = (userId: string) => {
    const { data } = useQuery({
        queryKey: ['singleUser'],
        queryFn: async () => {
          const res = await SERVER.get(`user/${userId}`);
          return res.data;
        }
      })

      return { data }
}



export const useMyGigs = (userId: String) => {
    const { data, isPending, refetch, error } = useQuery({
        queryKey: ['my-gigs'],
        queryFn: async () => {
            const res = await SERVER.get(``);
            return res.data;
        }
    });

    return { data, isPending, error, refetch }
}

// export const useGetAllGigs = () => {
    
// }

// export const useGetAllGigs = () => {
    
// }
