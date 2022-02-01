import { Container } from "./style";

interface IButton {
  height?: string;
  width?: string;
  icon: React.ReactNode;
  handleClickButton: () => Promise<void>;
}

export function Button({
  height = "3rem",
  width = "3rem",
  icon,
  handleClickButton,
}: IButton) {
  return (
    <Container height={height} width={width} onClick={handleClickButton}>
      {icon}
    </Container>
  );
}
