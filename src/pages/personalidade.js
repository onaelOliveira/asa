/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import "@fontsource/pacifico";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Chart from "react-google-charts";

export default function personalidade() {
  const theme = createTheme();
  const useStyles = makeStyles(() => ({
    typography: {
      fontFamily: ["pacifico"].join(","),
      fontSize: "1.1rem",
    },
    paper: {
      marginTop: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  const [state, setState] = useState([]);
  // const [options, setOption] = useState("Resultado");



  
  // const dados = [pI, pO, pC, pA];
  const a =  state.filter((item) => item.opcao === "A");
  const o = state.filter((item) => item.opcao === "O");
  const i = state.filter((item) => item.opcao === "I");
  const c = state.filter((item) => item.opcao === "C");
  const pA = a.length * 4;
  const pO = o.length * 4;
  const pI = i.length * 4;
  const pC = c.length * 4;
  const [options, setOptions] = useState({
    title: "Gráfico de Pizza",
  });

  const [data, setData] = useState([
    ["Linguagens", "Quantidade"],
    ["Tubarao", (a.length*4)],
    ["Lobo", 123],//pO],
    ["Aguia", 11],//pI],
    ["Gato", 10],//pC],
  ]);

  function handleSend() {
    setState([]);
  console.log(pA);

  }
  return (
    <Container>
      <Typography class={classes.typography}>
        <h1>Teste de Avaliação Comportamental</h1>
      </Typography>
      <Grid container>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu sou</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu sou"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 1 },
              ])
            }
          >
            <MenuItem value={"I"}>Idealista, criativo e visionário</MenuItem>
            <MenuItem value={"C"}>Divertido, espiritual e benéfico</MenuItem>
            <MenuItem value={"O"}>Confiável, meticuloso e previsível</MenuItem>
            <MenuItem value={"A"}>Focado, determinado e persistente</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 2 },
              ])
            }
          >
            <MenuItem value={"A"}>Ser piloto</MenuItem>
            <MenuItem value={"C"}>Conversar com os passageiros</MenuItem>
            <MenuItem value={"O"}>Planejar a viagem</MenuItem>
            <MenuItem value={"I"}>Explorar novas rotas</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Se você quiser se dar bem comigo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Se você quiser se dar bem comigo"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 3 },
              ])
            }
          >
            <MenuItem value={"A"}>Me dê liberdade</MenuItem>
            <MenuItem value={"C"}>Me deixa saber sua expectativa</MenuItem>
            <MenuItem value={"O"}>Lidere, siga ou saia do caminho</MenuItem>
            <MenuItem value={"I"}>
              Seja amigável, carinhoso e compreensível
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Para conseguir obter bons resultados é preciso
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Para conseguir obter bons resultados é preciso"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 4 },
              ])
            }
          >
            <MenuItem value={"I"}>Ter incertezas</MenuItem>
            <MenuItem value={"O"}>Controlar o essencial</MenuItem>
            <MenuItem value={"C"}>Diversão e celebração</MenuItem>
            <MenuItem value={"A"}>Planejar e obter recursos</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu me divirto quando
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu me divirto quando"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 5 },
              ])
            }
          >
            <MenuItem value={"A"}>Estou me exercitando</MenuItem>
            <MenuItem value={"I"}>Tenho novidades</MenuItem>
            <MenuItem value={"C"}>Estou com os outros</MenuItem>
            <MenuItem value={"O"}>Determino Regras</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu penso que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu penso que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 6 },
              ])
            }
          >
            <MenuItem value={"C"}>
              Unidos venceremos, divididos perderemos
            </MenuItem>
            <MenuItem value={"A"}>O ataque é a melhor defesa</MenuItem>
            <MenuItem value={"I"}>
              É bom ser manso, mas andar com um porrete
            </MenuItem>
            <MenuItem value={"O"}>O homem prevenino vale por dois</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Minha preocupação é
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Minha preocupação é"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 7 },
              ])
            }
          >
            <MenuItem value={"C"}>Gerar a ideia global</MenuItem>
            <MenuItem value={"A"}>O ataque é a melhor defesa</MenuItem>
            <MenuItem value={"I"}>
              É bom ser manso, mas andar com um porrete
            </MenuItem>
            <MenuItem value={"O"}>O homem prevenino vale por dois</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu prefiro</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu prefiro"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 8 },
              ])
            }
          >
            <MenuItem value={"I"}>Perguntas a respostas</MenuItem>
            <MenuItem value={"O"}>Ter todos os detalhes</MenuItem>
            <MenuItem value={"A"}>Vantagens a meu favor</MenuItem>
            <MenuItem value={"C"}>
              Que todos tenham a chance de serem ouvidos
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 9 },
              ])
            }
          >
            <MenuItem value={"A"}>Fazer progresso</MenuItem>
            <MenuItem value={"C"}>Construir memórias</MenuItem>
            <MenuItem value={"O"}>Fazer sentido</MenuItem>
            <MenuItem value={"I"}>Tornar as pessoas confortáveis</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de chegar
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de chegar"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 10 },
              ])
            }
          >
            <MenuItem value={"A"}>Na frente</MenuItem>
            <MenuItem value={"C"}>Junto</MenuItem>
            <MenuItem value={"O"}>Na hora</MenuItem>
            <MenuItem value={"I"}>Em outro lugar</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Um ótimo dia para mim é quando
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Um ótimo dia para mim é quando"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 11 },
              ])
            }
          >
            <MenuItem value={"A"}>Consigo fazer muitas coisas</MenuItem>
            <MenuItem value={"C"}>Me divirto com meus amigos</MenuItem>
            <MenuItem value={"O"}>Tudo segue conforme o planejado</MenuItem>
            <MenuItem value={"I"}>
              Desfruto de coisas novas e estimulantes
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu vejo a morte como
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu vejo a morte como"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 12 },
              ])
            }
          >
            <MenuItem value={"I"}>Uma grande aventura misteriosa</MenuItem>
            <MenuItem value={"C"}>Oportunidade para rever falecidos</MenuItem>
            <MenuItem value={"O"}>Um modo de receber recompensas</MenuItem>
            <MenuItem value={"A"}>Algo que sempre chega muito cedo</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Minha filosofia de vida é
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Minha filosofia de vida é"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 13 },
              ])
            }
          >
            <MenuItem value={"A"}>
              Há ganhadores e perdedores, e eu acredito ser um ganhador
            </MenuItem>
            <MenuItem value={"C"}>Para ganhar, ninguém precisa perder</MenuItem>
            <MenuItem value={"O"}>
              Para ganhar é precisa seguir as regras
            </MenuItem>
            <MenuItem value={"I"}>
              Para ganhar, é necessário inventar novas regras
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu sempre gostei de
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu sempre gostei de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 14 },
              ])
            }
          >
            <MenuItem value={"I"}>Explorar</MenuItem>
            <MenuItem value={"O"}>Evitar surpresas</MenuItem>
            <MenuItem value={"A"}>Focalizar a meta</MenuItem>
            <MenuItem value={"C"}>Realizar a abordagem natural</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de mudanças se
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de mudanças se"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 15 },
              ])
            }
          >
            <MenuItem value={"A"}>Me der uma vantagem competitiva</MenuItem>
            <MenuItem value={"C"}>
              For divertido e puder ser compartilhado
            </MenuItem>
            <MenuItem value={"I"}>Me der mais liberdade e variedade</MenuItem>
            <MenuItem value={"O"}>Melhorar ou me der mais controle</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Não existe nada errado em
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Não existe nada errado em"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 16 },
              ])
            }
          >
            <MenuItem value={"A"}>Se colocar na frente</MenuItem>
            <MenuItem value={"C"}>Colocar os outros na frente</MenuItem>
            <MenuItem value={"I"}>Mudar de ideia</MenuItem>
            <MenuItem value={"O"}>Ser consistente</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de buscar conselhos de
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de buscar conselhos de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 17 },
              ])
            }
          >
            <MenuItem value={"A"}>Pessoas bem sucedidas</MenuItem>
            <MenuItem value={"C"}>Anciões e conselheiros</MenuItem>
            <MenuItem value={"O"}>Autoridades no assunto</MenuItem>
            <MenuItem value={"I"}>Lugares, os mais estranhos</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Meu lema é</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Meu lema é"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 18 },
              ])
            }
          >
            <MenuItem value={"I"}>Fazer o que precisar ser feito</MenuItem>
            <MenuItem value={"O"}>Fazer bem feito</MenuItem>
            <MenuItem value={"C"}>Fazer junto com grupo</MenuItem>
            <MenuItem value={"A"}>Simplesmente fazer</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 19 },
              ])
            }
          >
            <MenuItem value={"I"}>Complexidade, mesmo se confuso</MenuItem>
            <MenuItem value={"O"}>Ordem e sistematização</MenuItem>
            <MenuItem value={"C"}>Calor humano e animação</MenuItem>
            <MenuItem value={"A"}>Coisas claras e simples</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            O tempo para mim é
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="O tempo para mim é"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 20 },
              ])
            }
          >
            <MenuItem value={"A"}>Algo que detesto desperdiçar</MenuItem>
            <MenuItem value={"C"}>Um grande ciclo</MenuItem>
            <MenuItem value={"O"}>Uma flecha que leva ao inevitável</MenuItem>
            <MenuItem value={"I"}>Irrelevante</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Se eu fosse bilionário
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Se eu fosse bilionário"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 21 },
              ])
            }
          >
            <MenuItem value={"C"}>Faria doações para entidades</MenuItem>
            <MenuItem value={"O"}>Criaria uma poupança avantajada</MenuItem>
            <MenuItem value={"I"}>Faria o que desse na cabeça</MenuItem>
            <MenuItem value={"A"}>
              Exibiria bastante com algumas pessoas
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu acredito que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 22 },
              ])
            }
          >
            <MenuItem value={"A"}>
              O destino é mais importante que a jornada
            </MenuItem>
            <MenuItem value={"C"}>
              A jornada é mais importante que o destino
            </MenuItem>
            <MenuItem value={"O"}>
              Um centavo economizado é um centavo ganho
            </MenuItem>
            <MenuItem value={"I"}>
              Bastam um navio e uma estrela para navegar
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu acredito também que
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito também que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 23 },
              ])
            }
          >
            <MenuItem value={"A"}>Aquele que hesita está perdido</MenuItem>
            <MenuItem value={"O"}>
              De grão em grão a galinha enche o papo
            </MenuItem>
            <MenuItem value={"C"}>O que vai, volta</MenuItem>
            <MenuItem value={"I"}>
              Um sorriso ou uma careta é o mesmo para quem é cego
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu acredito ainda que
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito ainda que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 24 },
              ])
            }
          >
            <MenuItem value={"O"}>
              É melhor prudência do que arrependimento
            </MenuItem>
            <MenuItem value={"I"}>A autoridade deve ser desafiada</MenuItem>
            <MenuItem value={"A"}>Ganhar é fundamental</MenuItem>
            <MenuItem value={"C"}>
              O coletivo é mais importante do que o individual
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu penso que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu penso que"
            //  onChange={(e) => setStartDate(e.target.value)}
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 25 },
              ])
            }
          >
            <MenuItem value={"I"}>Não é fácil ficar encurralado</MenuItem>
            <MenuItem value={"O"}>É preferível olhar, antes de pular</MenuItem>
            <MenuItem value={"C"}>
              Duas cabeças pensam melhor do que uma
            </MenuItem>
            <MenuItem value={"A"}>
              Se você não tem condições de competir, não compita
            </MenuItem>
          </Select>
        </FormControl>
        <Grid item xs={12}>
          <Typography fontSize={"1.8rem"} align="center">
            <Stack>
              <Button
                variant="contained"
                id="enviar"
                endIcon={<SendIcon />}
                type="submit"
                onClick={handleSend}
                // disabled={state.length !== 25}
              >
                {" "}
                Enviar{" "}
              </Button>
            </Stack>
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Chart
            
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </form>
      </div>
    </Container>
  );
}
