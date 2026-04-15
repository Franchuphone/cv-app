import "../styles/Editor.css";

export function Personal({ onToggle, isVisible, data, setData }) {
  return (
    <div className="personal-info">
      <h2>
        <button onClick={onToggle}>Perso</button>
      </h2>
      {isVisible === "personal" && (
        <>
          <label htmlFor="name">
            <div>Full name</div>
            <input
              id="name"
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
          </label>
          <label htmlFor="phone">
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
          </label>
        </>
      )}
    </div>
  );
}

export function Educational({ onToggle, isVisible, data, setData }) {
  const onChange = (e) =>
    setData((prev) =>
      prev.map((item) =>
        item.id === data.id ? { ...item, name: e.target.value } : item,
      ),
    );
  return (
    <div className="educational-info">
      <h2>
        <button onClick={onToggle}>Edu</button>
      </h2>
      {isVisible === "educational" && (
        <>
          <label htmlFor="formation">
            <div>Curriculum name</div>
            <input
              id="formation"
              type="text"
              onChange={onChange}
              value={data.name}
            />
          </label>
          <label htmlFor="date">
            <div>Year of obtention</div>
            <input
              id="date"
              type="tel"
              onChange={(e) => setData({ ...data, year: e.target.value })}
              value={data.year}
            />
          </label>
          <label htmlFor="school">
            <div>School name</div>
            <input
              id="school"
              type="email"
              onChange={(e) => setData({ ...data, school: e.target.value })}
              value={data.school}
            />
          </label>
          <Buttons />
        </>
      )}
    </div>
  );
}

export function Professional({ onToggle, isVisible, data, setData }) {
  return (
    <div className="profesional-info">
      <h2>
        <button onClick={onToggle}>Pro</button>
      </h2>
    </div>
  );
}

function Buttons() {
  return (
    <div className="editor-buttons">
      <button>New</button>
      <button>Delete</button>
    </div>
  );
}
