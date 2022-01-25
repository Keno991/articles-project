const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { Article, Articles } = require('./articles/queries');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            Article,
            Articles,
        }),
    }),
});