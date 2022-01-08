import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};
export const MenueDrawer: VFC<Props> = (props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xs" placement="left">
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={onClickHome}>
            top
          </Button>
          <Button w="100%" onClick={onClickUserManagement}>
            ユーザ一覧
          </Button>
          <Button w="100%" onClick={onClickSetting}>
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
