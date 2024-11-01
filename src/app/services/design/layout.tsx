import { ReactNode } from "react";
import DinoUiTag from "./_components/dino-ui-tag";

interface DesignLayoutProps {
  children: ReactNode;
}

export default function DesignLayout({ children }: DesignLayoutProps) {
  return (
    <div>
      <DinoUiTag />
      {children}
    </div>
  );
}
