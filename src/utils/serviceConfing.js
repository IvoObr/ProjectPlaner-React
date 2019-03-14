console.log('*********************', process.env.EXPRESS_URL)
const env = process.env.NODE_ENV || 'development';
export default (env === 'production' && process.env.EXPRESS_URL) ?
    process.env.EXPRESS_URL : 'https://project-planer-node-js.herokuapp.com';