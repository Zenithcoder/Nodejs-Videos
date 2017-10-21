if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://root:root@ds129315.mlab.com:29315/vidjot-prod'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }