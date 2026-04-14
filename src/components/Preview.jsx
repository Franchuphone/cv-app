import "../styles/Preview.css";

export default function Preview({ personal, educational, profesional }) {
  return (
    <>
      <h1>{personal.name}</h1>
      <div className="preview-personal">
        <h2>Contact</h2>
        <div className="contact">
          <span>{personal.phone}</span>
          <span>{personal.email}</span>
        </div>
      </div>
      <div className="educational-preview">
        <h2>Formations</h2>
        {educational.map((data) => (
          <PreviewEdu data={data} key={data.id} />
        ))}
      </div>
      <div className="profesional-preview">
        <h2>Experience</h2>
        {profesional.map((data) => (
          <PreviewExp data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

function PreviewEdu({ data }) {
  return (
    <div className="preview-edu">
      <h4>{data.name}</h4>
      <p>{data.school}</p>
      <p>{data.year}</p>
    </div>
  );
}

function PreviewExp({ data }) {
  return (
    <div className="preview-exp">
      <h4>{data.job}</h4>
      <p>{data.company}</p>
      <p>
        {data.dates[0]} - {data.dates[1]}
      </p>
      <p>
        {data.skills.map((skill, index) => (
          <PreviewSkill
            skills={data.skills}
            skill={skill}
            index={index}
            key={index}
          />
        ))}
      </p>
    </div>
  );
}

function PreviewSkill({ skills, skill, index }) {
  return index < skills.length - 1 ? (
    <>{cleanWord(skill)} - </>
  ) : (
    <>{cleanWord(skill)}</>
  );
}

function cleanWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
