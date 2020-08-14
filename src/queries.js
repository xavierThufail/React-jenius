import { gql } from '@apollo/client';

export const COUNTRIES = gql`
{
  countries {
    id,
    name,
    capital {
      name
    },
    continent {
      name
    },
    currencies {
      name
    }
    population,
    languages {
      name
    },
    location {
      long,
      lat
    },
    callingCodes,
  }
}
`;

export const CITIES = gql`
{
  cities(limit: 300) {
    id,
    name,
    continent {
      name
    },
    country {
      name
    },
    population,
    location {
      long,
      lat
    },
    timeZone {
      name,
      offset
    },
  }
}
`;