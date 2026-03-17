import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

import RootPage from "./page";

describe("RootPage", () => {
  it("正しくレンダリングされること", () => {
    render(<RootPage />);
    expect(screen.getByText("r216yu.xyz")).toBeDefined();
    expect(screen.getByText("About")).toBeDefined();
    expect(screen.getByText("Works")).toBeDefined();
    expect(screen.getByText("Career")).toBeDefined();
    expect(screen.getByText("Diary")).toBeDefined();
  });
});
