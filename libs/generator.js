const generateToken = (charCount = 32) => {
    return new Promise((resolve, reject) => {
        require('crypto').randomBytes(charCount, function(err, buffer) {
            if(err) reject(err)
            var token = buffer.toString('hex');
            resolve(token)
        });
    })
}

module.exports = { generateToken }
