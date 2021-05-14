import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataLoadAPI = (initialURL:string, initialSearchText:string): Array<any> => {
  console.log('useDataLoadAPI')

  const [url, setURL] = useState(initialURL);
  const [searchText, setSearchText] = useState(initialSearchText);
  const [responseData, setResponseData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('    -> useDataLoadAPI -> useEffect searchText: ' + searchText)
    const loadData = async () => {
      setIsError(false)
      setIsLoading(true)

      await axios.get(url, {params: {query: searchText}})
      .then ((response: any) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        setIsError(true)
      })
      setIsLoading(false)
    }

    if(searchText !== '') loadData()

  }, [url, searchText])

  return [{responseData, searchText, isLoading, isError}, setSearchText]
}

export default useDataLoadAPI