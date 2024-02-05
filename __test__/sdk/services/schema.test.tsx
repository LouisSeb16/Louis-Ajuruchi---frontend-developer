/**
 * @jest-environment jsdom
 */

import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDebouncedCallback } from "use-debounce";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import SearchField from "@/components/features/explore/SearchField";

jest.mock("use-debounce");
jest.mock("next/navigation");

describe("handleSearch", () => {
  it("updates query parameter in the URL on search", () => {
    const mockReplace = jest.fn();
    const mockSearchParams = new URLSearchParams("query=test");

    (useDebouncedCallback as jest.Mock).mockImplementation(
      (callback) => callback
    );

    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
      pathname: "/explore",
      query: { page: "1" },
    });

    (usePathname as jest.Mock).mockReturnValue("/explore");

    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    render(<SearchField />);

    act(() => {
      userEvent.type(screen.getByPlaceholderText("Search rocket"), "falcon");
    });

    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Search rocket"), {
        target: { value: "falcon" },
      });
    });

    // expect(mockReplace).toHaveBeenCalledWith("/explore?page=1&query=falcon");

    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining("page=1"));
    expect(mockReplace).toHaveBeenCalledWith(
      expect.stringContaining("query=falcon")
    );
  });
});
