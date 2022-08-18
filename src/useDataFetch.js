import { useState, useEffect } from 'react';

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(info => {setData(info)})
  }, [url])
  return [data, setData];
}

export default useDataFetch;
