import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Not Found</Typography>
      <Typography>
        The requested URL/404 was not found on this server.
      </Typography>
      <Typography>
        <Link to="/">Go to Home </Link>
      </Typography>
    </div>
  );
};

export default NotFound;
