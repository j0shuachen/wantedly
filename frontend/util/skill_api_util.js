export const fetchSkills = data => (
  $.ajax({
    method: "GET",
    url: '/api/skills',
    data
  })
);

export const fetchSkill = id => (
  $.ajax({
    method: "GET",
    url: `/api/skills/${id}`
  })
);


export const createSkill = data => (
  $.ajax({
    method: "POST",
    url: "api/skills",
    data
  })
);

export const updateSkill = skill =>(
  $.ajax({
    method: 'PATCH',
    url: `/api/skills/${skill.id}`,
    skill
  })
);
