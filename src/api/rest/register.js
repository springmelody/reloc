import makeRequest from '../makeRequest'

export const register = data => {
  return makeRequest({
    url: '/api/auth/local/register',
    method: 'POST',
    data,
  })
}
