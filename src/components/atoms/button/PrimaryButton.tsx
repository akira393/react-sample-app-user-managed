import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, onClick, loading = false, disabled = false } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: "0.8" }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
