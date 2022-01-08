import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectedUser } from "../../hooks/useSelectedUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { loading, getAllUsers, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedUser, onSelectedUser } = useSelectedUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getAllUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectedUser({ id, users, onOpen });
    },
    [users, onOpen, selectedUser]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : users ? (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem mx="auto" key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      ) : (
        <></>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
