export default `
    type Query {
        login(input: DataLogin): AuthData
    }
    
    type AuthData {
        status: Boolean!
        message: String!
        resLogin: String!
        userId: ID
        token: String
        tokenExpiration: Int
    }
    
    input DataLogin {
        usuario: String!
        password: String!
    }
`;