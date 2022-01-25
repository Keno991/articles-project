const graphql = require('graphql')
const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
} = graphql

const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
    })
})
module.exports = ArticleType;