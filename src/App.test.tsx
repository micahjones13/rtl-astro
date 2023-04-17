/* eslint-disable testing-library/prefer-screen-queries */
//input.test.tsx
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "testing-library__dom";
import RuxInputTest from "./App";

//* Make sure to run `npm run astro-test`

describe("RuxInput", () => {
  test("Input changes with fireEvent", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxInputTest />);
    const ruxInput = getByTestId("rux-input-test");
    fireEvent.change(ruxInput, { target: { value: "Input!" } });
    await findByDisplayValue("Input!");
  });

  test("Input changes with userEvent", async () => {
    const { getByTestId, findByDisplayValue } = render(<RuxInputTest />);
    const ruxInput = getByTestId("rux-input-test");
    let shadowInput: HTMLRuxInputElement = await within(
      ruxInput
    ).findByLabelText("Rux Input");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(shadowInput, "User input!");
    });
    await findByDisplayValue("User input!");
    expect(shadowInput.value).toBe("User input!");
  });
});
