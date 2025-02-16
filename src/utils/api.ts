import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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



export const useGetAllGig = () => {
  const {error, data, isPending} = useQuery({
    queryKey: ['all-gigs'],
    queryFn: async () => {
      const res = await SERVER.get('gig');
      return res.data;
    }
  })

  return { data, error, isPending };
}



export const useSingleUser = (userId: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: [userId],
        queryFn: async () => {
          const res = await SERVER.get(`user/${userId}`);
          return res.data;
        },
        enabled: !!userId
      })

      return { data, isPending, error }
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



export const useGetReviews = (gigId: string) => {
    const { data,  error, isPending } = useQuery({
      queryKey: ['reviews'], 
      queryFn: async () => {
        const res = await SERVER.get(`review/${gigId}`)
        return res.data;
      }
    });

    return { data, isPending, error }
}

export const useAddReview = () => {


  const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: (review: any) => {
        return SERVER.post('review', review)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['reviews']})
      }
    })
    return mutation;
}



export const useGetOrders = () => {
  const { data,  error, isPending } = useQuery({
    queryKey: ['ordees'], 
    queryFn: async () => {
      const res = await SERVER.get('order')
      return res.data;
    }
  });

  return { data, isPending, error }
}



export const useCreateOrders = () => {

    const mutation = useMutation({
      mutationFn: (gigId: string) => {
        
        return SERVER.post(`order/${gigId}`)
      },
      onSuccess: () => {

      }
    })
    return mutation;
}



export const useGetConversation = () => {

  const { data, isPending, error } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const res = await SERVER.get('conversation');

      return res.data;
    }
  })
  return { data, error, isPending }
}


export const useReadConversation = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
   mutationFn: (id: string) => {
    return SERVER.patch(`conversation/${id}`)
   },
   onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['conversations']})
   }
  })
  return mutation;
}


export const useGetMsg = (id: string | undefined) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['msg'],
    queryFn: async () => {
      const res = await SERVER.get(`messages/${id}`);
      return res.data;
    },
    enabled: !!id
  })
  return { data, isPending, error }
}


export const useMsgMutation = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message: { conversationId: string; desc: string }) => {
      return SERVER.post(`messages`, message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['msg']})
    }
  })

  return mutation;
}

