export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => {
  const req = $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  });

  return req;
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUser = id =>(
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users`
  })
);

export const updateUser = user => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user
  })
);
