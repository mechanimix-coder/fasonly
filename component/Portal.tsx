// components/Portal.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export default function Portal({
  children,
  containerId = "portal-root",
}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!document.getElementById(containerId)) {
      const container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    return () => {
      const container = document.getElementById(containerId);
      if (container && container.children.length === 0) {
        document.body.removeChild(container);
      }
    };
  }, [containerId]);

  return mounted
    ? createPortal(children, document.getElementById(containerId)!)
    : null;
}
