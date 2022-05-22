import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraCustomLink } from "@chakra-ui/react";

interface IcustomeLink {
  ChakraComponent: any;
  to: any;
  children: unknown;
}

const CustomLink: React.FC<IcustomeLink> = ({
  ChakraComponent,
  to,
  children,
  ...props
}) => {
  return (
    <Link to={to} >
      <ChakraCustomLink>
        <ChakraComponent {...props}>{children}</ChakraComponent>
      </ChakraCustomLink>
    </Link>
  );
};

export default CustomLink;
