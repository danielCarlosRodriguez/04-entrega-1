import React from "react";
import { Badge } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";


export const CartWidget = () => {
  return (
    <div className="dropdown text-end">
      <Cart3 size={30} color="royalblue" />
      {/* <Badge bg="light text-dark">9</Badge> */}
      <Badge bg="light text-dark">9</Badge>
    </div>
  );
};
