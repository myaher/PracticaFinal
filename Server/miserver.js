const express = require('express')
const cors = require('cors')
const app = express()
var fs = require('fs');
var csv = require('fast-csv');
var parse = require('csv-parse');
var createReadStream = require('csv-reader');


var inputFile ='Victims.csv';

app.use(cors())

app.get('/data', (req, res) => {

/*
	fs.createReadStream(inputFile)
	  .pipe(csv())
	  .on('data',function(data) {
	  	//console.log(data);
	  	//res.JSON(data);
	  })
	  .on('end',function(data){
	  	console.log('finished');
	  	//res.end(JSON.parse(data));
	  	//res.JSON(data);
	  	 res.send(data);
	  });*/

var csvData=[];
fs.createReadStream(inputFile, 'utf8')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
        //res.send(csvrow);
        csvData.push(csvrow);        
    })
 .on('end',function() {
      //do something wiht csvData
    // console.log(csvData);
     res.send(csvData);
    });
})

app.get('/*', (req, res) => res.send('Hello World!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))