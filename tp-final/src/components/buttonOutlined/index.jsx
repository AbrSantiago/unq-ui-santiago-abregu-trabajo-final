import Button from "@mui/material/Button";

const ButtonOutlined = ({ onClick, title }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonOutlined;
