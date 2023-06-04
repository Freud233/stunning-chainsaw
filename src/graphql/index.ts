import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useGetPosts = () => {
  const { result } = useQuery(gql`
    query {
      posts {
        data {
          id
          attributes {
            title
            content
          }
        }
      }
    }
  `);
  return result;
}