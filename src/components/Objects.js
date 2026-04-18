export class PersonalInfo {
  constructor(name, phone, email, intro) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.introduction = intro;
  }
}

export class EducationalInfo {
  constructor(degree, school, year) {
    this.degree = degree;
    this.school = school;
    this["year of obtention"] = year;
    this.id = crypto.randomUUID();
  }
}

export class ProfessionalInfo {
  constructor(job, company, duration, skills) {
    this.job = job;
    this.company = company;
    this.dates = duration;
    this.skills = skills;
    this.id = crypto.randomUUID();
  }
}
