import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ myAddon }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        myAddon: !myAddon,
      }),
    [myAddon]
  );
  return (
    <IconButton
      key={TOOL_ID}
      active={myAddon}
      title="Apply outlines to the preview"
      onClick={toggleMyTool}
    >
      <Icons icon="outline" />
    </IconButton>
  );
};
