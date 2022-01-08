import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = (props) => {
  const { onOpen } = props;

  return (
    <IconButton
      aria-label="menu-icons"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};
