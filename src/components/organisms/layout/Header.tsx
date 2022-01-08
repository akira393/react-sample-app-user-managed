import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenueDrawer } from "../../molecules/MenueDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/users"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        // 基本は3(0.75rem)、md(48em)以上の横幅なら5(1.25rem)
        padding={{ base: 3, md: 5 }}
      >
        <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザ一覧
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr="4">
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Box>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenueDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
