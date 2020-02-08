import gql from "graphql-tag";

const SEARCH_BY_NAME = gql`
    query Character($name: String!) {
        characters(filter: {name: $name}) {
            results {
                name,
                image
            }
        }
    }
`

export default SEARCH_BY_NAME