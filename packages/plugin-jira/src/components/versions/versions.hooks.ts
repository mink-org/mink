import { useState, useEffect } from 'react';

const useVersions = (jira) => {
  const [versions, setVersions] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    jira
      .getVersions()
      .then((res) => {
        setVersions(res)
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return {
    versions,
    isPending,
  }
};

export default useVersions;
