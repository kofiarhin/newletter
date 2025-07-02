import { useMutation } from "@tanstack/react-query";

const subscribeUser = async (data) => {
  console.log("subscribe user");
  return data;
};

const useSubscribeMutation = () => {
  return useMutation({
    mutationKey: ["subscribe"],
    mutationFn: (data) => subscribeUser(data),
  });
};

export default useSubscribeMutation;
