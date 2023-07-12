import Button from "@mui/material/Button";

const ButtonOutlined = ({ onClick, title, ...props }) => {
  return (
    <Button variant="outlined" onClick={onClick} {...props}>
      {title}
    </Button>
  );
};

export default ButtonOutlined;
