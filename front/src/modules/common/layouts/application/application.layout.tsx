import { PropsWithChildren } from "react";
import { ApplicationProvider } from "../../providers/application.provider";

export const ApplicationLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ApplicationProvider>{children}</ApplicationProvider>;
};
