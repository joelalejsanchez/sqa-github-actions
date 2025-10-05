import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import App from "./app";

const mockItemCounter = vi.fn((props: unknown) => {
  // @ts-expect-error las props no estan tipadas
  return <div data-testid="item-counter" item={props.item}></div>;
});
vi.mock("./components/item-counter", () => ({
  default: (props: unknown) => mockItemCounter(props),
}));
/* vi.mock("./components/item-counter", () => ({
  default: (props) => (
    <div
      data-testid="item-counter"
      item={props.item}
      start={props.start}
      step={props.step}
      min={props.min}
      max={props.max}
    >
      ItemCounter
    </div>
  ),
})); */

describe("App", () => {
  afterEach(() => {
    // Limpia la llamada de los mocks
    vi.clearAllMocks();
  });
  test("should render 2 instances of ItemCounter component", () => {
    render(<App />);
    const items = screen.getAllByTestId("item-counter");
    expect(items).not.toBeNull();
    expect(items.length).toBe(2);
    expect(items[0].getAttribute("item")).toBe("Manzana");
    expect(items[1].getAttribute("item")).toBe("Manzanas");
  });
  // Se esperan argumentos especificos
  test("should render 2 instances of ItemCounter component", () => {
    render(<App />);
    expect(mockItemCounter).toHaveBeenCalledTimes(2);
    expect(mockItemCounter).toHaveBeenCalledWith({ item: "Manzana", start: 0 });
    expect(mockItemCounter).toHaveBeenCalledWith({
      item: "Manzanas",
      start: 0,
    });
  });
});
