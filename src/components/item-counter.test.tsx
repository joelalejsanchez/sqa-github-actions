import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ItemCounter from "./item-counter";

describe("ItemCounter", () => {
  test("should render with default values and item Manzana", async () => {
    const ITEM = "Manzana";
    const STEP = 1;
    render(<ItemCounter item={ITEM} start={0} />);

    expect(screen.getByText(ITEM)).toBeDefined();
    expect(screen.getByText(`+${STEP}`)).toBeDefined();
    expect(screen.getByText(`-${STEP}`)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", async () => {
    // start = 1
    const ITEM = "Manzana";
    render(<ItemCounter item={ITEM} start={1} />);
    const [, add] = screen.getAllByRole("button");
    fireEvent.click(add);

    expect(screen.getByText("2")).toBeDefined();
  });
  test("shouldn't increase count when +1 button is pressed", async () => {
    // start = 10, limit 10
    const ITEM = "Manzana";
    render(<ItemCounter item={ITEM} start={10} max={10} />);

    const [, add] = screen.getAllByRole("button");
    fireEvent.click(add);

    expect(screen.getByText("10")).toBeDefined();
  });
  test("should decrease count when -1 button is pressed", async () => {
    // start = 1, limit 0
    const ITEM = "Manzana";
    render(<ItemCounter item={ITEM} start={1} min={0} />);

    const [decrease] = screen.getAllByRole("button");
    fireEvent.click(decrease);

    expect(screen.getByText("0")).toBeDefined();
  });
  test("shouldn't decrease count when -1 button is pressed", async () => {
    // start = 1, limit 1
    const ITEM = "Manzana";
    render(<ItemCounter item={ITEM} start={1} min={1} />);

    const [decrease] = screen.getAllByRole("button");
    fireEvent.click(decrease);

    expect(screen.getByText("1")).toBeDefined();
  });
});
