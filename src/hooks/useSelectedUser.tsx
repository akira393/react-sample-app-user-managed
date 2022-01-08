import { useCallback, useState } from "react";
import { User } from "../types/api/user";
type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};
export const useSelectedUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectedUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
    onOpen();
    // setSelectedUser(targetUser!);
  }, []);
  return { selectedUser, onSelectedUser };
};
