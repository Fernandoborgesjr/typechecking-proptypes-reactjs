import "./App.css";
import Schedule from "./Schedule";

function App() {
  return (
    <div className="App">
      <h3>Petshop - Agendamentos</h3>
      <table>
        <thead>
          <tr>
            <th>Nome do cliente</th>
            <th>Telefone do cliente</th>
            <th>Nome do pet</th>
            <th>Pet</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          <Schedule customer={{ name: "Fernando", phone: "(44) 99999-9999" }} />
          <Schedule
            customer={{ name: "Júnior", phone: "(44) 99999-9999" }}
            kindOfPet="cow"
          />
          <Schedule
            customer={{ name: "Paulo", phone: "(44) 99999-9999" }}
            petName={1}
            kindOfPet="cat"
            schedule="12/12/12"
          />
          <Schedule customer="Teste" />
        </tbody>
      </table>
    </div>
  );
}

export default App;
