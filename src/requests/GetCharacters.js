import { useQuery } from "@apollo/react-hooks";
import SEARCH_BY_NAME from "./queries/query";

const useCharacters = ({ name }) => {
  
  const { loading, error, data } = useQuery(SEARCH_BY_NAME, {
    variables: { name },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return data;
}


export default useCharacters