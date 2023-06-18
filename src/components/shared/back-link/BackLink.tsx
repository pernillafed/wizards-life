/** @jsxImportSource theme-ui */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BackLinkStyles } from "../../../pages/library/book/Book.styles";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export type BackLinkProps = {
  path: string;
  text: string;
};

const BackLink = ({ path, text }: BackLinkProps) => {
  return (
    <div sx={{ width: "100%" }}>
      <Link to={path} sx={BackLinkStyles}>
        <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
        {text}
      </Link>
    </div>
  );
};

export default BackLink;
