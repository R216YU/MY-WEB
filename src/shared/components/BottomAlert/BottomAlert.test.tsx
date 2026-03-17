import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BottomAlert from "./BottomAlert";

describe("BottomAlert", () => {
  it("正しくレンダリングされること", () => {
    render(
      <BottomAlert
        title="title"
        description="desc"
        type="default"
        data-testid="bottom-alert"
      />,
    );
    const bottomAlert = screen.getByTestId("bottom-alert");
    expect(bottomAlert).toBeDefined();
  });

  // WIP:
});
