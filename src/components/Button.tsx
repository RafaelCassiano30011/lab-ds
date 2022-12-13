/** @format */

import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={}>{children}</Comp>;
}
