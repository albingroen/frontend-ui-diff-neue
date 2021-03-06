export const getEnv = () => {
  const apiEnvs: { [frontendEnv: string]: string } = {
    localhost: 'http://localhost:5000',
    'app.ui-diff.com': 'https://ui-diff-api.herokuapp.com'
  }

  return apiEnvs[window.location.hostname]
}
