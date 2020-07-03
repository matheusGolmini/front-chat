import React, { Component } from 'react';
import { appSocket } from './service/appSocket';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface State {
  mensagens: MensagemPayload[];
}
export class ListarMensagens extends Component<{}, State> {
  state: State = {
    mensagens: [{ nome: "Matheus", mensagem: "Test2" }]
  };

  componentDidMount() {
      appSocket.on("mensagens", (mensagens: MensagemPayload[]) => {
        this.setState({
          mensagens
        });
      });
  }
renderMensagens = () => {
    return this.state.mensagens.map(mensagem => <Mensagem {...mensagem} />);
  };
render() {
    return <ul>{this.renderMensagens()}</ul>;
  }
}
const Mensagem = ({ mensagem, nome }: MensagemPayload) => {
  return (
    <li>
      <p key={""}>
        {mensagem} -
        <small>
          <i> {nome}</i>
        </small>
      </p>
    </li>
  );
};