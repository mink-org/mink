import { useState, useEffect } from 'react';

const useIssues = (jira) => {
  const [issues, setIssues] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    jira
      .getBoardIssues()
      .then((res) => {
        setIssues(res)
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return {
    issues,
    isPending,
  }
};

export default useIssues;
