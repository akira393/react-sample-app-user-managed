import React, { ChangeEvent, useEffect, useState, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = (props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;
  const onClickUpdate = () => alert();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);
  const changeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const changeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={changeUserName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={changeName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={changeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={changePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin ? (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>編集</PrimaryButton>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </Modal>
  );
};
