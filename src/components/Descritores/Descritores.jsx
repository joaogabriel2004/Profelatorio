import React, {useState} from "react";
import "./Descritores.css";
import { FaCog, FaUserGraduate, FaListUl, FaQuestion } from "react-icons/fa";

const Descritores = () => {
    const [inputs, setInputs] = useState([""]); // Array que armazena os campos de entrada

    // Função para adicionar um novo campo de input
    const handleAddInput = () => {
        setInputs([...inputs, ""]);
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
    </div>
  );
};

export default Descritores;
