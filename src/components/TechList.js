import React, { Component } from "react";
import TechItem from "./ThechItem";
class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"],
  };

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
    // pega o valor do input e atualiza a variável newTech
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      // remonta o array inserindo o item digitado no input

      newTech: "",
      // apaga o valor que ficou digitado no input
    });
  };

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) });
    // retorna todas difetentes de (t) que está sendo clicado
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem
              key={tech}
              tech={tech}
              // passando uma props

              onDelete={() => this.handleDelete(tech)}
              // passando uma props como uma função
            />
          ))}
          <TechItem />
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
