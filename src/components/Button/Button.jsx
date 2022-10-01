import { Button } from "../Button/Button.styled";


export const ContactButton = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <Button
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};