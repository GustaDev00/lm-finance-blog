"use client";

import { ReactNode } from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { VisitorAcess } from "@/utils/visitor";

export const VisitorData = ({ id, children }: { id: string; children: ReactNode }): ReactNode => {
  const { data: visitorData, error } = useVisitorData();

  if (error) {
    return <div>Erro ao carregar os dados do visitante.</div>;
  }

  if (visitorData?.visitorId) {
    VisitorAcess({
      userId: visitorData.visitorId,
      url: window.location.href,
      id,
    });
  }

  return <>{children}</>;
};
