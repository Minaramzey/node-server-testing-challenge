const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if(err) {
        // the token is not valid
        res.status(401).json({ Error: "Token is not valid!"})
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    })
  } else {
    res.status(401).json({ Error: 'Please provide credentials'})
  }
}; 