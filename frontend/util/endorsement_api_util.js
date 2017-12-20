export const fetchEndorsements = data => (
  $.ajax({
    method: "GET",
    url: '/api/endorsements',
    data
  })
);

export const fetchEndorsement = id => (
  $.ajax({
    method: "GET",
    url: `/api/endorsements/${id}`
  })
);


export const createEndorsement = data => (
  $.ajax({
    method: "POST",
    url: "api/endorsements",
    data
  })
);

export const updateEndorsement = endorsement =>(
  $.ajax({
    method: 'PATCH',
    url: `/api/endorsements/${endorsement.id}`,
    endorsement
  })
);
