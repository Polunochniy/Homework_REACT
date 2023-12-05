import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  query getToken($login: String!, $password: String!) {
    login(login: $login, password:  $password)
  }
`;

export const GET_GOODS_SCHEMA = gql`
  query getGoods($query: String!) {
    GoodFind(query: $query) {
      _id
      name
      description
      price
      categories {
        _id
        createdAt
        name
      }
      images {
        url
      }
    }
  }
`;

export const GET_CATEGORIES_SCHEMA = gql`
  query getGoods($query: String!) {
    CategoryFind(query: $query) { 
      _id
      name
    }
  }
`;

export const GET_NEW_USER = gql`
mutation UserUpsert($user: UserInput) {
  UserUpsert(user: $user) {
    _id
    createdAt
    login
    nick
  }
}
`;

export const GET_ORDER = gql`
mutation newOrder($goods: [OrderGoodInput]) {
  OrderUpsert(order: {orderGoods: $goods}) {
    _id
    total
    orderGoods {
      _id
      goodName
      price
      count
    }
  }
}
`;

