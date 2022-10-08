import React, { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { googleApi } from "../../api/api";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = `formResponse?entry.2005620554=${name}&entry.1065046570=${email}&entry.1045781291=${email}&entry.1166974658=${phone}&entry.839337160=${comment}`;
    googleApi.post(encodeURI(data));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        label="Nome"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        label="Email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Telefone"
        value={phone}
        type="tel"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Textarea
        label="Comentário"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />

      <button>Enviar</button>
    </form>
  );
};
