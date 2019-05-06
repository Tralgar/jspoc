import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER = gql`
  query User($userId: ID!, $catalogId: ID!) {
    User(id: $userId) {
      id
      email
    }
    Catalog(id: $catalogId) {
      id
      station
      products
    }
  }
`;

export const User = () => (
  <Query query={GET_USER} variables={{ userId: 1, catalogId: 2 }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          Id : {data.User.id}
          Email : {data.User.email}
        </div>
      );
    }}
  </Query>
);

export default User;
