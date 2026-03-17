import { Alert } from "@heroui/react";

type BottomAlertProps = {
  type: "warning" | "success" | "accent" | "danger" | "default" | undefined;
  title: string;
  description: string;
  "data-testid"?: string;
};

const BottomAlert = ({
  title,
  description,
  type,
  ...rest
}: BottomAlertProps) => {
  return (
    <Alert
      status={type}
      className="fixed bottom-4 left-1/2 max-w-lg -translate-x-1/2 transform"
      {...rest}
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert>
  );
};

export default BottomAlert;
