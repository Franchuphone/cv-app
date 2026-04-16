import { useState } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
import { Personal, Educational, Professional } from "./Editor";

function App() {
  const [dataPersonal, setDataPersonal] = useState({
      name: "John Doe",
      phone: "666 666 666",
      email: "john.doe@no.where",
    }),
    [dataEducational, setDataEducational] = useState([
      {
        school: "Nowhere Land",
        "year of obtention": 1900,
        curriculum: "Practical ways to be invisible",
        id: crypto.randomUUID(),
      },
    ]),
    [dataProfessional, setDataProfessional] = useState([
      {
        company: "Nowhere Megacorp",
        dates: [1900, 2000],
        job: "Invisible Master",
        skills: ["invisibility", "spying", "Cleverness"],
        id: crypto.randomUUID(),
      },
    ]),
    [isVisible, setIsVisible] = useState("personal"),
    onToggle = (section) =>
      section === isVisible ? setIsVisible(null) : setIsVisible(section);

  return (
    <div className="container">
      <header>
        <Personal
          onToggle={() => onToggle("personal")}
          data={dataPersonal}
          setData={setDataPersonal}
          isVisible={isVisible}
        />
        {dataEducational.map((data) => {
          return (
            <Educational
              onToggle={() => onToggle("educational")}
              data={data}
              setData={setDataEducational}
              isVisible={isVisible}
              key={data.id}
            />
          );
        })}
        {dataProfessional.map((data) => {
          return (
            <Professional
              onToggle={() => onToggle("professional")}
              data={data}
              setData={setDataProfessional}
              isVisible={isVisible}
              key={data.id}
            />
          );
        })}
      </header>
      <main>
        <Preview
          personal={dataPersonal}
          educational={dataEducational}
          profesional={dataProfessional}
        />
      </main>
    </div>
  );
}

export default App;
