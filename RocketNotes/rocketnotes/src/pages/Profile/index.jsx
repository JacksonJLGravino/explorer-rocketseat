import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/jacksonjlgravino.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" tipe="text" icon={FiUser} />
        <Input placeholder="E-mail" tipe="text" icon={FiMail} />
        <Input placeholder="Senha atual" tipe="password" icon={FiLock} />
        <Input placeholder="Nova senha" tipe="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
