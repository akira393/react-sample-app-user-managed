import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません", status: "warning" });
            setLoading(false);
          }
        })
        .catch((e) => {
          showMessage({ title: "ログインに失敗しました", status: "warning" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { loading, login };
};
