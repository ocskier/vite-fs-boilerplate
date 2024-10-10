import request from 'graphql-request';

const gqlRequest = (query: string, vars?: Record<string, any>
) => {
    return request(`${window.location.origin}/graphql`, query, vars)
}

export default gqlRequest;