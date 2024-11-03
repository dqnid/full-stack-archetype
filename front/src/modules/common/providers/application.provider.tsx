"use client";

import { AuthProvider } from "@/modules/auth/providers/auth.provider";
import { PropsWithChildren } from "react";

export const ApplicationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
