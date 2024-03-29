import styled from "styled-components";
import imagem from "../constants/iconInfo.js"

export default function PerguntaCover({index, mudaFase, cardAtualFase, resultadoObtido}) {
  //O ícone é controlado a partir do estado do resultadoObtido, que indica valores abaixo:

  return (
    <PerguntaCoverBox data-test="flashcard" cardAtualFase={cardAtualFase} resultadoObtido={resultadoObtido} >
      <p data-test="flashcard-text" >Pergunta {index+1}</p>
      {/* DEFINE SE USA A IMAGEM DE SETA, OU ALGUMA DAS OUTRAS TRÊS OPÇÕES */}
      {cardAtualFase===0 ? <img data-test={imagem['seta'].dataTest} src={imagem['seta'].src} alt="Seta" onClick={()=>mudaFase(index)}  /> : <img data-test={imagem[resultadoObtido].dataTest} src={imagem[resultadoObtido].src} alt={resultadoObtido} />}
    </PerguntaCoverBox>
  );
}
//Troca a cor de acordo com o botão clicado anteriormente em Resposta
const mudarCor = cor =>{
  switch (cor) {
    case 'certo':
      return "#2FBE34";
    case 'erro':
      return "#FF3030";
    case 'quase':
      return "#FF922E";
    default:
      return "#333333";
  }
};

const PerguntaCoverBox = styled.div`
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    text-decoration: ${(props=> props.cardAtualFase === 0 ? "none" : "line-through")};
    text-decoration-thickness: 3px;
    text-decoration-color: ${({resultadoObtido}) => mudarCor(resultadoObtido)};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    p {
      font-family: "Recursive", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color:${({resultadoObtido}) => mudarCor(resultadoObtido)};
      //color: #333333;
    }
    img {
      cursor:${(props=> props.cardAtualFase === 0 ? "pointer" : "default")};
      width: 20px;
      height: 20px;
    }
`;
