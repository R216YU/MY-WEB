import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname, useRouter } from "next/navigation";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import MenuButton from "./MenuButton";

// デフォルトモック
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn().mockReturnValue("/default"),
}));

describe("MenuButton", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // モックをリセットする
  });

  afterEach(() => {
    cleanup(); // DOMをクリーンアップする
  });

  it("正しくレンダリングされること", () => {
    render(<MenuButton />);
    expect(screen.getByTestId("menu-button")).toBeDefined();
  });

  it("メニューボタンをクリックするとドロップダウンが表示されること", async () => {
    render(<MenuButton />);

    const user = userEvent.setup();
    const button = screen.getByTestId("menu-button");
    await user.click(button);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Works")).toBeInTheDocument();

    expect(screen.getByText("Diary")).toBeInTheDocument();
  });

  it("ドロップダウンの項目をクリックするとhandleClick関数が呼び出されること", async () => {
    const mockPush = vi.fn();
    vi.mocked(useRouter).mockReturnValue({ push: mockPush } as any);
    vi.mocked(usePathname).mockReturnValue("/about");
    render(<MenuButton />);

    const user = userEvent.setup();
    const button = screen.getByTestId("menu-button");
    await user.click(button);
    const aboutItem = screen.getByText("About");
    await user.click(aboutItem);

    expect(mockPush).toHaveBeenCalledWith("/about");
  });

  it("ルートパスの場合、メニューボタンが表示されないこと", () => {
    vi.mocked(usePathname).mockReturnValue("/");
    render(<MenuButton />);

    expect(screen.queryByTestId("menu-button")).toBeNull();
  });

  it("現在のパスが/aboutの時はAboutの横にCustomCheckmarkIconが表示されること", async () => {
    vi.mocked(usePathname).mockReturnValue("/about");
    render(<MenuButton />);

    const user = userEvent.setup();
    const button = screen.getByTestId("menu-button");
    await user.click(button);
    const checkmarkIcon = screen.getByTestId("checkmark-icon-/about");
    expect(checkmarkIcon).toBeInTheDocument();
  });
});
