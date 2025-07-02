import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const subscribeUser = async (data) => {
  try {
    const prefix = "/api/subscribers";
    const url = import.meta.env.DEV ? prefix : `${baseUrl}${prefix}`;
    console.log("xxxxx", url);
    const res = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("something weng wrong");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error.message);
    return { sucess: false, error: error.message };
  }
};

const useSubscribeMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["subscribe"],
    mutationFn: (data) => subscribeUser(data),
    onSuccess: (data) => {
      navigate("/success");
    },
  });
};

export default useSubscribeMutation;
