import React from "react";
import { Container, TextareaUI, Label } from "./style";

export const Textarea = ({ label, value, onChange, type, required }) => {
  return (
    <Container>
      <Label isWritten={!!value}>{label}</Label>
      <TextareaUI
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
    </Container>
  );
};
