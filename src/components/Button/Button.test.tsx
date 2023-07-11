// componets/Greetings.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ...

describe("when the button is pressed", () => {
  it("should call the `onSendWaves` callback", () => {
    const onSendWavesMock = jest.fn();
    render(
      <Greetings 
        name="Test Name" 
        onSendWaves={onSendWavesMock} />
    );
    
    fireEvent.click(screen.getByRole("button"));
    expect(onSendWavesMock).toHaveBeenCalledWith(
      "Waves sent to Test Name!");
  });
});