import React from "react";
import { Container, InputUI, Label } from "./style";

export const Input = ({ label, value, onChange, type, required }) => {
  return (
    <Container>
      <Label isWritten={!!value}>{label}</Label>
      <InputUI
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
    </Container>
  );
};
