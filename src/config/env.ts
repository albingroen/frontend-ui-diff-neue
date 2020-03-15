export const getEnv = () => {
  const apiEnvs: { [frontendEnv: string]: string } = {
    localhost: "http://localhost:5000"
  };

  return apiEnvs[window.location.hostname];
};
