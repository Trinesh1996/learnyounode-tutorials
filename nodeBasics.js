let fs = require("fs")
let path = require("path")
let extFilter = require("./extFilter")
let http = require("http");
let v8 = require("v8")
let bl = require("bl")
const url = require('url');
const net = require("net")



// 1.
//  console.log("HELLO WORLD")

// 2.

// let processENV = process.argv

// let sum = 0

// for (let i = 0; i<processENV.length; i++) {
//     let list = processENV[i]
//     if (Number(list)) {
//         sum += Number(list)

//     }
// }

// console.log(sum)

// 3.

// let path = process.argv[2]
// let text = fs.readFileSync(path)
// let lines = text.toString().split('\n')
// console.log(lines.length - 1)


// 4.
// fs.readFile takes in a string as an argument which is the file path, the second param specifies the encoding method.
// if not included the callback function will return a buffer object


// let processENV = process.argv

// for (let i = 2; i<processENV.length; i++) {

//     fs.readFile(processENV[i], 'utf8', function (err, data) {
//         if (err) throw err;

//         // convert object to string and split string by new line
//         let stringify = data.toString().split('\n')
//         console.log(stringify.length - 1)
//     })
// }

// 5.
// Globals
// let processENV = process.argv[1]
// let rootPath = path.dirname(processENV)

// function filterExt (ext) {

//     fs.readdir(rootPath, function (err, list) {
//         if (err) throw err;
    
//         let extension = list.filter((res) => {
    
//             if (path.extname(res) == ext) {
//                 console.log(res)
//             }
    
//         })
    
//     })
// }
// let extensionFilter = filterExt('.md')


// 6.

// Globals
// let processENV = process.argv[1]
// let rootPath = path.dirname(processENV)


// function filterExt (ext) {
//     extFilter(rootPath, ext, function (err, data) {
//         if (err) throw err;

//         let extension = data.filter((res) => {
//                 console.log(res)
//             })
//     })
// }
// let extensionFilter = filterExt('md')

// 7.
// response object is a stream object
// streams emit events ie. data, error, end
// http get methods also have setEncoding methods, if called that data events will emit strings rather than standard Node Buffer objects

// let url = process.argv[2]

// http.get(url, function (res) {
//     res.setEncoding('utf8')
//     res.on('data', function (data) {
//         console.log(data)
//     })

//     res.on('error', function (data) {
//         console.log(error)
//     })
// })

// 8.
// let urlTest = process.argv[2]
// let PORT = 3000

// const options = {
//     host: '127.0.0.1',
//     port: 8080,
//     path: '/'
//   };

//     http.get(urlTest, function (response) {
//         response.setEncoding('utf8')
    
//         response.pipe(bl(function (err, data) {
//             if (err) throw err;
    
//             let chunk = data.toString()
//             console.log(chunk)
//             console.log(chunk.length)
//             console.log(chunk)
//         }))
      
//     })



// 9.


// let env2 = process.argv[2];
// let env3 = process.argv[3];
// let env4 = process.argv[4];


// async function getData () {
//     let env = process.env
//     for (let i = 2; i<env.length; i++ ){
        
//       await http.get(env[i], function (res) {
//             res.setEncoding('utf8');

//             res.pipe(bl(function (err, data) {
//                 if (err) throw err;
//                 let chunk = data.toString();
//                 console.log(chunk)
//             }))
//         })

 
//     }
// }
// getData()

// async function getData () {
  
//        let link1 =  await http.get(env, function (res) {
//             res.setEncoding('utf8')
    
//             res.pipe(bl(function (err, data) {
//                 if(err) throw err;
                
//                 let chunk = data.toString()
//                 console.log(chunk)
                
//             }))
      
//         })
    
//        let link2 =  await http.get(env2, function (res) {
//             res.setEncoding('utf8')
    
//             res.pipe(bl(function (err, data) {
//                 if(err) throw err;
                
//                 let chunk = data.toString()
//                 console.log(chunk)
//             }))
//         })
        
//       let link3 =  await http.get(env4, function (res) {
//             res.setEncoding('utf8')
    
//             res.pipe(bl(function (err, data) {
//                 if(err) throw err;
                
//                 let chunk = data.toString()
//                 console.log(chunk)
                
//             }))
//         })

//         return {
//             get1: link1,
//             get2: link2,
//             get3: link3
         
//         }
// }


// Alternate Solution

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }


// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }


// 10.

// create a TCP server.
// Format date and time.

// function formatTime(currentDate) {
//     let hour = currentDate.getHours()
//     let minute = currentDate.getMinutes();

//     let hourFormatted = hour % 12 || 12 // hour returned in 24 hour format

//     let minuteFormatted = minute < 10 ? "0" + minute : minute
    
//     if (hour < 10) {
//         return "0" + hourFormatted + ":" + minuteFormatted
//     }
//     else {
//         return  hourFormatted + ":" + minuteFormatted
//     }
// }


// let date = new Date()
// let timeFormat = formatTime(date)

// // getMonth function returns month from January to December (0, 1) so you need to add 1 to correctly get the value.
// let now = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}` + " " + timeFormat


// let PORT = process.argv[2]

// let server = net.createServer(function (socket) {
    
//     console.log("server connected");

//         socket.end(now, 'utf8', function (err) {
//             if (err) throw err;
//     })
// })



// server.on('error', function (e) {
//     if (e.code == 'EADDRINUSE') {
//         console.log('Address in use, retrying...')
//         setTimeout(function () {
//             server.close();
//             server.listen(PORT, 'localhost')
//         }, 1000)
//     }
// })

// server.listen(PORT, function () {
//     console.log('server bound')
// })


// 11.
// let file = process.argv[3]
// let PORT = process.argv[2];
// let tcpServer = net.createServer()


// let httpServer = http.createServer(function (req, res) {
//     const { statusCode } = res

//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     let readFile = fs.createReadStream(file, 'utf8');

//     readFile.pipe(res)
// })
    

// httpServer.listen(PORT, 'localhost', function () {
//     console.log(`Server started on`, PORT)
// })

// 12.

