import DatePicker from "react-datepicker";
import { useState } from "react";
import { format } from "date-fns";
import { cleanWord } from "./Preview";

export function CalendarPicker({ setData, id }) {
  const [startDate, setStartDate] = useState(null),
    [endDate, setEndDate] = useState(null),
    dates = (x, y) => [format(x, "yyyy-MM-dd"), format(y, "yyyy-MM-dd")];

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      id={id + "- dates"}
      onChange={([start, end]) => {
        setStartDate(start);
        setEndDate(end);
        onChange(dates(start, end), "dates", setData, id);
      }}
    />
  );
}

export function TextInput({ param, setData, data }) {
  return (
    <>
      <label>
        <div> {cleanWord(param)}</div>
        <input
          id={data.id + "-" + param}
          type="text"
          onChange={(e) =>
            ["name", "phone", "email"].includes(param)
              ? setData({ ...data, [param]: e.target.value })
              : onChange(e, param, setData, data.id ? data.id : param)
          }
          value={data[param]}
          autoComplete={
            ["name", "phone", "email"].includes(param) ? param : null
          }
        />
      </label>
    </>
  );
}

export function SkillInput({ setData, data, skill, index }) {
  const handleChange = (e) =>
    setData((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? {
              ...item,
              skills: item.skills.map((skill, i) =>
                i === index ? e.target.value : skill,
              ),
            }
          : item,
      ),
    );

  return (
    <input
      id={data.id + index}
      type="text"
      onChange={(e) => handleChange(e)}
      value={skill}
    />
  );
}

export function TextAreaInput({ param, data, setData }) {
  return (
    <>
      <label>
        <div>{cleanWord(param)}</div>
        <textarea
          name=""
          id="introduction"
          onChange={(e) => setData({ ...data, [param]: e.target.value })}
          value={data.introduction}
        ></textarea>
      </label>
    </>
  );
}

const onChange = (e, param, setData, id) => {
  setData((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, [param]: e.target ? e.target.value : e }
        : item,
    ),
  );
};
