let fs = require('fs')
let path = require("path")

module.exports = function (file, ext, callback) {
    if (typeof(ext) !== "string") {
        throw new Error("second argument file extension should be a string")
    }

    else if (typeof(callback) !== "function") {
        throw new Error("The callback argument / 3rd argument must be a function")
    }

    fs.readdir(file, function (err, data) {
        if (err) {
            return callback(err)
        }

        let results = [];

        for (let i = 0; i<data.length; i++) {
         
            if (path.extname(data[i]) == ("." + ext)) {
                results.push(data[i])
            }
        }

        callback(null, results)

    


    })

}













