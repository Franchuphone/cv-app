import "../styles/App.css";
import { Preview } from "./Preview";
import { Personal, Educational, Professional } from "./Editor";
import { ButtonAddCategory, ButtonPdf } from "./Buttons";
import { useState } from "react";
import { EducationalInfo, PersonalInfo, ProfessionalInfo } from "./Objects";

function App() {
  const InitialPersonal = new PersonalInfo(
      "Your name",
      "06 00 00 00 00",
      "your@mail.here",
      "Clear and concise introduction",
    ),
    InitialEducational = new EducationalInfo(
      "Degree name",
      "School name",
      2000,
    ),
    InitialProfessional = new ProfessionalInfo(
      "Job name",
      "Company name",
      [2000, 2000],
      ["first skill", "second skill", "third skill"],
    );

  console.log(InitialProfessional);

  const [dataPersonal, setDataPersonal] = useState(InitialPersonal),
    [dataEducational, setDataEducational] = useState([InitialEducational]),
    [dataProfessional, setDataProfessional] = useState([InitialProfessional]),
    [isVisible, setIsVisible] = useState("personal"),
    onToggle = (section) =>
      section === isVisible ? setIsVisible(null) : setIsVisible(section);

  return (
    <>
      <div className="container">
        <header>
          <h2>
            <button onClick={() => onToggle("personal")}>Personal</button>
          </h2>
          {isVisible === "personal" && (
            <div className="input-menu">
              <Personal
                onToggle={() => onToggle("personal")}
                data={dataPersonal}
                setData={setDataPersonal}
                isVisible={isVisible}
              />
            </div>
          )}
          <h2>
            <button onClick={() => onToggle("educational")}>Education</button>
          </h2>
          {isVisible === "educational" && (
            <div className="input-menu">
              {dataEducational.map((data) => {
                return (
                  <Educational
                    data={data}
                    setData={setDataEducational}
                    key={data.id}
                  />
                );
              })}
              <ButtonAddCategory
                param="educational"
                setData={setDataEducational}
                newData={InitialEducational}
              />
            </div>
          )}
          <h2>
            <button onClick={() => onToggle("professional")}>Carreer</button>
          </h2>
          {isVisible === "professional" && (
            <div className="input-menu">
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
              <ButtonAddCategory
                param="professional"
                setData={setDataProfessional}
                newData={InitialProfessional}
              />
            </div>
          )}
        </header>
        <main>
          <Preview
            personal={dataPersonal}
            educational={dataEducational}
            profesional={dataProfessional}
          />
        </main>
        <div className="export-button">
          <ButtonPdf />
        </div>
      </div>
    </>
  );
}

export default App;
