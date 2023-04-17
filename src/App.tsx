// MyForm.tsx
import { useState } from "react";
import { RuxInput } from "@astrouxds/react";

function RuxInputTest() {
  const [input, setInput] = useState("");

  return (
    <div>
      <RuxInput
        label="Rux Input"
        type="text"
        data-testid="rux-input-test"
        value={input}
        onRuxinput={(e: CustomEvent<HTMLRuxInputElement>) => {
          const target = e.target as HTMLInputElement;
          setInput(target.value);
        }}
      />
    </div>
  );
}

export default RuxInputTest;
