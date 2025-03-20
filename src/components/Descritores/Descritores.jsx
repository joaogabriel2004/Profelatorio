import React, {useState} from "react";
import "./Descritores.css";
import { FaCog, FaUserGraduate, FaListUl, FaQuestion } from "react-icons/fa";

const Descritores = () => {
    const [inputs, setInputs] = useState([""]); // Array que armazena os campos de entrada

    // Função para adicionar um novo campo de input
    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleRemoveInput = (index) => {
        if (inputs.length > 1) {
            setInputs(inputs.filter((_, i) => i !== index)); // Remove apenas o input clicado
        }
    };

    // Função para atualizar o valor do campo
    const handleChangeInput = (value, index) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
    };

    // Função para manipular o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados:", inputs);
    };
  return (
    <div className="descritores-field">
        <div className="descritores-title">
            <h2>Título</h2>
        </div>
        <p className="descritores-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula turpis. Cras venenatis metus et tempus sodales. Aliquam erat volutpat. Mauris non interdum eros. Quisque mauris purus, vestibulum vel vehicula quis, luctus nec purus. Etiam consectetur at neque nec luctus. In condimentum mattis ligula et condimentum.</p>
    
        <div className="modalDescritores">
            <h2>Informações gerais</h2>
            <select name="Turma" id="select-turma">
                <h3>Selecione a disciplina</h3>
                <option value="Selecione uma Turma" disabled>Selecione uma Disciplina</option>
                <option value="Disciplina 1">Disciplina 1</option>
                <option value="Disciplina 2">Disciplina 2</option>
                <option value="Disciplina 3">Disciplina 3</option>
                <option value="Disciplina 4">Disciplina 4</option>
            </select>

            <h3>Adicionar Descritores</h3>
            <form onSubmit={handleSubmit}>
                <div className="divDescritores">
                    {inputs.map((input, index) => (
                        <div key={index} className="input-group">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => handleChangeInput(e.target.value, index)}
                            placeholder={`Descritor ${index + 1}`}
                            className="input-field"
                        />
                        <button type="button" onClick={() => handleRemoveInput(index)} className="remove-button">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddInput} className="add-button">
                        +
                    </button>
                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>

    
    /*
    <div className="divBackground">
        <div className="modalDescritores">
            <h2>Adicionar Descritores</h2>
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div key={index} className="input-group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => handleChangeInput(e.target.value, index)}
                        placeholder={`Descritor ${index + 1}`}
                        className="input-field"
                    />
                    </div>
                ))}
                <button type="button" onClick={handleAddInput} className="add-button">
                    +
                </button>
                <button type="submit" className="submit-button">
                    Enviar
                </button>
            </form>
        </div>
    </div>*/
  );
};

export default Descritores;
