import Form from "./Form.jsx"

function App() {
  
let ar = ["Aditi",24,"bhopal"]
let arf = ar.map((e,index)=>{return<li key={index}>{e}</li>})
  return (
    <>
{ar.map((e,index)=>{return <h1 key={index}>{e}</h1>}) }

<ul>
<li>{arf}</li>
</ul>
<Form/>
</>
)
}

export default App
