import "./App.css";
import tree from "./api/answer.json";

function App() {
  const services = tree.services;

  const newArr = [];
  const newArr1 = [];
  const newArr2 = [];
  const newArr3 = [];
  const newArr4 = [];
  const newArr5 = [];
  const newArr6 = [];

  const headServices = services
    .filter((item) => item.node === 0)
    .sort((a, b) => a.head - b.head);
  const nodeServices = services
    .filter((item) => item.node === 1)
    .sort((a, b) => a.head - b.head);
  // const sortServices = [];
  //const count = [...new Set(services.map((service) => service.head))]; // Вложенность

  for (let i = 0; i < services.length; i++) {
    if (!services[i].head) {
      newArr.push(services[i]);
      newArr.sort((a, b) => a.sorthead - b.sorthead);
    } else {
      newArr1.push(services[i]);
    }
  }

  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i].node === 0) {
      newArr2.push(newArr1[i]);
    } else {
      newArr3.push(newArr1[i]);
    }
  }

  for (let i = 0; i < newArr2.length; i++) {
    if (newArr2[i].head === 2) {
      newArr4.push(newArr2[i]);
      newArr4.sort((a, b) => a.sorthead - b.sorthead);
    } else if (newArr2[i].head === 3) {
      newArr5.push(newArr2[i]);
      newArr5.sort((a, b) => a.sorthead - b.sorthead);
    } else {
      newArr6.push(newArr2[i]);
      newArr6.sort((a, b) => a.sorthead - b.sorthead);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {headServices.map((nodeService) => {
          return (
            <div key={nodeService.id}>
              {nodeService.head ? (
                nodeService.head === 2 ? (
                  <div key={nodeService.id} style={{ marginLeft: "20px" }}>
                    {nodeService.name}
                  </div>
                ) : nodeService.head === 3 ? (
                  <div key={nodeService.id} style={{ marginLeft: "40px" }}>
                    {nodeService.name}
                  </div>
                ) : nodeService.head === 8 ? (
                  <div key={nodeService.id} style={{ marginLeft: "60px" }}>
                    {nodeService.name}
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div key={nodeService.id}>{nodeService.name}</div>
              )}
            </div>
          );
        })}
        {nodeServices.map((nodeService) => {
          return (
            <div key={nodeService.id}>
              {nodeService.head ? (
                nodeService.head === 2 ? (
                  <div key={nodeService.id} style={{ marginLeft: "20px" }}>
                    {nodeService.name}
                  </div>
                ) : nodeService.head === 3 ? (
                  <div key={nodeService.id} style={{ marginLeft: "40px" }}>
                    {nodeService.name}
                  </div>
                ) : nodeService.head === 8 ? (
                  <div key={nodeService.id} style={{ marginLeft: "60px" }}>
                    {nodeService.name}
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div key={nodeService.id}>{nodeService.name}</div>
              )}
            </div>
          );
        })}
        {/*newArr.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                {item.name}
                  {item.node === 0
                    ? item.head === 2 ? (<ul>{newArr4.map((item) =>{return <li key={item.id}>{item.name}</li>})}</ul>) : ({})
                    : newArr3.map((item) => {
                        return <li key={item.id}>{item.name}</li>;
                      })}
              </li>
            </ul>
          );
        })*/}
      </header>
    </div>
  );
}

export default App;
