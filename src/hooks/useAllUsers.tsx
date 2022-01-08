import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
        }
      })
      .catch((e) => {
        showMessage({ title: "ユーザ取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, getAllUsers, users };
};
