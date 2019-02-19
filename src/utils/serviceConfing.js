export default (process.env.NODE_ENV === 'production' ? 'https://project-planer-node-js.herokuapp.com' : 'http://localhost:3002')

console.log('**********PROCESS************',process.env.NODE_ENV)