import "../styles/Editor.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { format } from "date-fns";
import { cleanWord } from "./Preview";

export function Personal({ onToggle, isVisible, data, setData }) {
  return (
    <div className="personal-info">
      <h2>
        <button onClick={onToggle}>Perso</button>
      </h2>
      {isVisible === "personal" && (
        <>
          <TextInput param="name" setData={setData} data={data} />
          <TextInput param="phone" setData={setData} data={data} />
          <TextInput param="email" setData={setData} data={data} />

          {/* <label htmlFor="phone">
            <div>Phone number</div>
            <input
              id="phone"
              type="tel"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              value={data.phone}
            />
          </label>
          <label htmlFor="mail">
            <div>Email</div>
            <input
              id="mail"
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
            />
          </label> */}
        </>
      )}
    </div>
  );
}

export function Educational({ onToggle, isVisible, data, setData }) {
  return (
    <div className="educational-info">
      <h2>
        <button onClick={onToggle}>Study</button>
      </h2>
      {isVisible === "educational" && (
        <>
          <TextInput param="curriculum" setData={setData} data={data} />
          <TextInput param="school" setData={setData} data={data} />
          <TextInput param="year of obtention" setData={setData} data={data} />
          {/* <label htmlFor="school">
            <div>School name</div>
            <input
              id="school"
              type="email"
              onChange={(e) => onChange(e, "school", setData, data.id)}
              value={data.school}
            />
          </label> */}
          <Buttons />
        </>
      )}
    </div>
  );
}

export function Professional({ onToggle, isVisible, data, setData }) {
  return (
    <div className="professional-info">
      <h2>
        <button onClick={onToggle}>Carreer</button>
      </h2>
      {isVisible === "professional" && (
        <>
          <TextInput param="job" setData={setData} data={data} />
          <TextInput param="company" setData={setData} data={data} />
          <label htmlFor="date">
            <div>Duration</div>
            <DurationPicker setData={setData} id={data.id} />
          </label>
          <label htmlFor="skills">
            <div>Skills</div>
          </label>
          {/* <TextInput param="year of obtention" setData={setData} data={data} /> */}

          {/* {() => (param = "job")}
          {console.log(param)}
          <label htmlFor={param}>
            <div>Job</div>
            <input
              id={param}
              type="text"
              onChange={(e) => onChange(e, { param }, setData, data.id)}
              value={data[param]}
            />
          </label> */}

          <Buttons />
        </>
      )}
    </div>
  );
}

const onChange = (e, prop, func, id) => {
  func((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, [prop]: e.target ? e.target.value : e }
        : item,
    ),
  );
};

let param;

function Buttons() {
  return (
    <div className="editor-buttons">
      <button>New</button>
      <button>Delete</button>
    </div>
  );
}

function DurationPicker({ setData, id }) {
  const [startDate, setStartDate] = useState(null),
    [endDate, setEndDate] = useState(null),
    dates = (x, y) => [format(x, "yyyy-MM-dd"), format(y, "yyyy-MM-dd")];

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={([start, end]) => {
        setStartDate(start);
        setEndDate(end);
        onChange(dates(start, end), "dates", setData, id);
      }}
    />
  );
}

function TextInput({ param, setData, data }) {
  return (
    <>
      <label htmlFor={param}>
        <div> {cleanWord(param)}</div>
        <input
          id={param}
          type="text"
          onChange={(e) =>
            param === "name" || param === "phone" || param === "email"
              ? setData({ ...data, [param]: e.target.value })
              : onChange(e, param, setData, data.id)
          }
          // onChange={(e) => onChange(e, param, setData, data.id)}
          value={data[param]}
        />
      </label>
    </>
  );
}
