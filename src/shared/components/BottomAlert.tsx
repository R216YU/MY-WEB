import { Alert } from "@heroui/react";

type BottomAlertProps = {
  type: "warning" | "success" | "accent" | "danger" | "default" | undefined;
  title: string;
  description: string;
};

const BottomAlert = ({ title, description, type }: BottomAlertProps) => {
  return (
    <Alert
      status={type}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-lg"
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
