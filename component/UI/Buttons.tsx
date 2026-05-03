import React from "react";

interface Props {
  title: string;
  url: string;
  theme: "GreenToBlue" | "BlueToGreen";
  style?: string;
}

export function RedirectButton({ title, url, theme, style }: Props) {
  if (theme === "GreenToBlue") {
    return (
      <a
        className={`bg-[#96E92A] rounded-lg px-7 py-3 text-[#0B1221] font-medium text-[1rem] hover:bg-[#0099ff]/90 hover:text-white transition-colors duration-300`}
        role="button"
        href={url}>
        {title}
      </a>
    );
  }
  return (
    <a
      className={`bg-[#0099ff] rounded-lg px-7 py-3 text-white font-medium text-[1rem] hover:text-[#0B1221] hover:bg-[#96E92A]/90 transition-colors duration-300 `}
      role="button"
      href={url}>
      {title}
    </a>
  );
}
