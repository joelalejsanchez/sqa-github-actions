import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./counter";

describe("Counter", () => {
  /* test("should render title", () => {
    // Se renderiza el componente
    // const component = render(<Counter title="Contador" start={0} />);
    // console.log(component);

    // Screen se puede usar como si fuera un contenedor
    // render(<Counter title="Contador" start={0} />);
    // screen.debug();
  })
   */
  test("should render title", () => {
    // Se renderiza el componente
    // const component = render(<Counter title="Contador" start={0} />);
    // console.log(component);

    // Screen se puede usar como si fuera un contenedor
    // render(<Counter title="Contador" start={0} />);
    // screen.debug();

    /**
     * Podemos destructurar el render
     * Si el componente recibe alguna interaccion, el container no se actualizara como es esperado
     * para ello debemos usar screen.
     *
     */
    const TITLE = "Contador";
    const { container } = render(<Counter title={TITLE} start={0} />);
    const nSpans = container.querySelectorAll("span");
    const nButtons = container.querySelectorAll("button");
    const titleResult = container.querySelector("h3");

    expect(nSpans.length).toBe(1);
    expect(nButtons.length).toBe(2);
    expect(titleResult).toBeTruthy();
    expect(titleResult?.textContent).toBe(TITLE.toUpperCase());
  });

  test("should render title - screen", async () => {
    const TITLE = "Contador";
    render(<Counter title={TITLE} start={0} />);
    // screen.debug();
    const title = await screen.findByRole("heading", { level: 3 });

    // expect(title).toBeTruthy();
    expect(title.textContent).toContain(TITLE.toUpperCase());
  });

  // Trabajar con screen para snapshots es mas complicado entonces prefiero no hacerlo (att joel)
  // No se recomienda usar snapshots si es que los componentes reciben una actualizacion muy constante
  /*   test("should match snapshot", async () => {
    const TITLE = "Contador";
    const { container } = render(<Counter title={TITLE} start={0} />);
    expect(container).toMatchSnapshot();
  }); */

  // No esta recomendado por Hernando Herrera usar atributos data para obtener los elementos, pero si es la necesidad se pueden realizar de esta manera
  test("should match title, with testid", async () => {
    const TITLE = "Contador";
    render(<Counter title={TITLE} start={0} />);
    const title = screen.getByTestId("title");
    expect(title.textContent).toBe(TITLE.toUpperCase());
  });
});
