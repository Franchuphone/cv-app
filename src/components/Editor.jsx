import "../styles/Editor.css";
import "react-datepicker/dist/react-datepicker.css";
import { ButtonRemoveCategory, ButtonSkill } from "./Buttons";
import { CalendarPicker, SkillInput, TextAreaInput, TextInput } from "./Inputs";

export function Personal({ data, setData }) {
  return (
    <div className="personal-info">
      <DisplayInputs data={data} setData={setData} />
      {/* <TextAreaInput data={data} setData={setData} /> */}
    </div>
  );
}

export function Educational({ data, setData }) {
  return (
    <div className="educational-info">
      <DisplayInputs data={data} setData={setData} />
      <ButtonRemoveCategory id={data.id} setData={setData} data={data} />{" "}
    </div>
  );
}

export function Professional({ data, setData }) {
  return (
    <div className="professional-info">
      <DisplayInputs data={data} setData={setData} />
      <label>
        <div>Duration</div>
        <CalendarPicker setData={setData} id={data.id} />
      </label>
      <label className="skills-editor">
        <div>Skills</div>
        {data.skills &&
          data.skills.map((skill, index) => {
            return (
              <SkillInput
                setData={setData}
                skill={skill}
                index={index}
                data={data}
                key={index}
              />
            );
          })}
        <ButtonSkill data={data} setData={setData} />
      </label>
      <ButtonRemoveCategory id={data.id} setData={setData} data={data} />
    </div>
  );
}

function DisplayInputs({ data, setData }) {
  // Filtering simple inputs
  const excluded = ["id", "dates", "skills"];

  return (
    <>
      {Object.entries(data)
        .filter(([key]) => !excluded.includes(key))
        .map(([key]) =>
          key === "introduction" ? (
            <TextAreaInput
              param={key}
              setData={setData}
              data={data}
              key={key}
            />
          ) : (
            <TextInput param={key} setData={setData} data={data} key={key} />
          ),
        )}
    </>
  );
}
