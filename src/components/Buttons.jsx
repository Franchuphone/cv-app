// import minus from "../assets/minus-circle.1.svg";
// import plus from "../assets/plus-circle.1.svg";
// import github from "../assets/github.svg";
// import pdf from "../assets/pdf-box.svg";
import images from "./images";

export function ButtonRemoveCategory({ id, setData, data }) {
  const handleRemove = () => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="editor-buttons">
      <button
        onClick={handleRemove}
        id="button-remove"
        key={data.id + "-remove"}
      >
        ↑ Remove ↑
      </button>
    </div>
  );
}

export function ButtonAddCategory({ param, setData, newData }) {
  const handleAdd = () => setData((prev) => [...prev, newData]);

  return (
    <button onClick={handleAdd} id="button-add" key={param + "-add"}>
      New
    </button>
  );
}

export function ButtonSkill({ data, setData }) {
  const addSkill = () =>
    setData((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? { ...item, skills: [...(item.skills || []), ""] }
          : item,
      ),
    );

  const removeSkill = () =>
    setData((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? { ...item, skills: (item.skills || []).slice(0, -1) }
          : item,
      ),
    );

  return (
    <div className="skills-buttons">
      <button onClick={removeSkill}>
        <img src={images["minus.svg"]} alt="" />
      </button>
      <button onClick={addSkill}>
        <img src={images["plus.svg"]} alt="" />
      </button>
    </div>
  );
}

export function ButtonGithub() {
  return (
    <a
      id="button-github"
      href="https://github.com/Franchuphone/cv-app"
      target="_blank"
      rel="noreferrer"
    >
      <img src={images["github.svg"]} alt="" />
    </a>
  );
}

export function ButtonPdf() {
  return (
    <button id="button-pdf" onClick={() => window.print()}>
      <img src={images["pdf-box.svg"]} alt="" />
    </button>
  );
}
