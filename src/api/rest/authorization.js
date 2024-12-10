import makeRequest from '../makeRequest'

export const login = data => {
  return makeRequest({
    url: '/api/auth/local',
    method: 'POST',
    data,
  })
}
