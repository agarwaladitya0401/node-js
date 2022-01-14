// ES6 modules : React
// commonjs modules: Node.js

const a = 10;

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

module.exports = {
    a
}

exports = {
    a,
    b(){}
}

exports.a = 10;

const fun1 = () =>{

}

const fun2 = () =>{

}

module.exports = {fun1, fun2}

exports.fun1 = () => {

}

exports.fun2 = () =>{
    
}
