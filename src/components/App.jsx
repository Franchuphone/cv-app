import { useState } from "react";
import "../styles/App.css";
import Preview from "./Preview";
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
        year: 1900,
        name: "Practical ways to be invisible",
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
          console.log(dataEducational.find((item) => item.id === data.id));
          return (
            <Educational
              onToggle={() => onToggle("educational")}
              data={data}
              setData={() =>
                setDataEducational(
                  ...dataEducational,
                  dataEducational.find((item) => item.id === data.id),
                )
              }
              isVisible={isVisible}
              key={data.id}
            />
          );
        })}
        <Professional
          onToggle={() => onToggle("professional")}
          data={dataProfessional}
          setData={setDataProfessional}
          isVisible={isVisible}
        />
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
