const jwt = require('jsonwebtoken'),

      payload = {
          id: 123456,
          user: 'Santy',
          role: 'Admin',
          isValid: true
      },

      secret = 'miclavesecreta',

      options = {
          expiresIn: '1ms'
      },

      token = jwt.sign(payload, secret, options)

console.log('token', token);

const tokenFalso = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2LCJ1c2VyIjoiU2FudHkiLCJyb2xlIjoiQWRtaW4iLCJpc1ZhbGlkIjp0cnVlLCJpYXQiOjE2MDQxNTg1ODksImV4cCI6MTYwNDE1ODU4OX0.OnmAYwDu7e3J2vAay4m7uYS94nO0uoiaSMvNkhXgOqk'

//Verificar token
setTimeout(() => {
    try {
        const decoded = jwt.verify(tokenFalso, secret)
        console.log('decoded', decoded)
    } catch (error) {
        console.log('error:name', error.name)
        console.log('error:message', error.message);
    }
}, 1000);



