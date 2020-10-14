var express = require('express');
var cors = require('cors');
var web3 = require('web3');
var bodyParser = require('body-parser');

//const BN = require('bn.js');

var app = express();
var web3 = new web3(new web3.providers.HttpProvider('http://127.0.0.1:8545')); //rpc port no for node
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var BloodChain_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_hospitalId",
				"type": "uint256"
			},
			{
				"name": "_hospitalName",
				"type": "string"
			},
			{
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"name": "_availableStatus",
				"type": "uint256"
			}
		],
		"name": "addBloodGroupRequest",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_requestBloodGroupId",
				"type": "uint256"
			}
		],
		"name": "approveBloodRequest",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_requestBloodGroupId",
				"type": "uint256"
			}
		],
		"name": "rejectBloodRequest",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_aadharNo",
				"type": "uint256"
			}
		],
		"name": "setDonor",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_aadharNo",
				"type": "uint256"
			},
			{
				"name": "_age",
				"type": "uint256"
			},
			{
				"name": "_donarName",
				"type": "string"
			},
			{
				"name": "_donarAddress",
				"type": "string"
			},
			{
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "uint256"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_mobileno",
				"type": "uint256"
			}
		],
		"name": "setDonorDetails",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_aadharNo",
				"type": "uint256"
			}
		],
		"name": "verifyDonor",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "BloodRequestArray",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "DonarArray",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBloodGroupRequestArray",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBloodGroupRequestArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_requestBloodGroupId",
				"type": "uint256"
			}
		],
		"name": "getBloodGroupRequestById",
		"outputs": [
			{
				"name": "_hospitalId",
				"type": "uint256"
			},
			{
				"name": "_hospitalName",
				"type": "string"
			},
			{
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"name": "_availableStatus",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_aadharNo",
				"type": "uint256"
			}
		],
		"name": "getRegisterDonarById",
		"outputs": [
			{
				"name": "_age",
				"type": "uint256"
			},
			{
				"name": "_donarName",
				"type": "string"
			},
			{
				"name": "_donarAddress",
				"type": "string"
			},
			{
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "uint256"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_mobileno",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRegisterDonorArray",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRegisterDonorArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "requestBloodGroupId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

//var objuserContract = web3.eth.contract(userContract_abi).at('0x630BD76789384Ec06BA7C703Bcb17c86A48061E3');

var objuserContract = web3.eth.Contract(BloodChain_abi,'0xE958CF08a78649D07E99d2BA6feBF8eEd831a730');

 function getGasLimit()
{
//unlockAccount();
return ({ from: getFromAccount(), gas: '3000000' }); //web3.toHex(web3.eth.getBlock(0).gasLimit) });
}
/*
function setEvent(obj, res)
{
var events = obj.alert({}, { fromBlock: web3.eth.blockNumber, toBlock: 'latest' });
events.watch(function (error, result) {
if (!error) {
console.log(result.args);
res.end(JSON.stringify(result.args.msg));
}
});
}
*/

function getFromAccount()
{   
    web3.eth.getAccounts().then(function(s){console.log(s);return s[0]});
    //web3.eth.getAccounts().then(e => return e[0]);
	// var a;
	// web3.eth.getAccounts().then(res => {a=res; return res[0]});
	// return res[0];
}

var gasLimitUpd = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27', gas:500000});
var gasLimitUpdCall = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27'});

app.post('/setDetails', async function (req, res)
{
	console.log("**Set Donor Details UPD**");
		console.log(req.body);

    var aadharNo = parseInt(req.body.donarAaadhar);
    var age = parseInt(req.body.donarAge);
    var donarName = (req.body.donarName+' '+req.body.donarNameLast);
    var donarAddress = req.body.donarAddress;
    var bloodGroup = req.body.donarBloodGroup;
    var status =  0; //parseInt(req.body._status);
	var state = req.body.donarAddressLandmark;
	var mobileNo = req.body.donarMobileNo
    console.log("donar's aadharNo :" + aadharNo);
    console.log("donar's Age  :" + age);
    console.log("donar's Name :" + donarName);
    console.log("donar's Address :" + donarAddress);
    console.log("donar's bloodGroup :" + bloodGroup);
    console.log("donar's status  :" + status);
    
   // var gasResult = await getFromAccount();
    var gasResult= '0x296950d91C0De3A84B2B004A75cf0AB110491d27';
    console.log("Reutun rn =="+await getFromAccount());
    console.log("gas Result ==="+gasResult);
  
  	await objuserContract.methods.setDonorDetails(aadharNo,age,donarName,donarAddress,bloodGroup,status,state,mobileNo).send(gasLimitUpd,(error, result)=> {
    console.log("inside contract function");
		if(error){
			console.log("Error == >"+error);
			res.send({message:"Aadhar Number already present.",error});
		}else{
			console.log('Result : ==',result);
			while(web3.eth.getTransactionReceipt(result) == null) {
				console.log("working on mining");
			}
			console.log("mining completed....")
						web3.eth.getTransactionReceipt(result).then(function (balance) {
								console.log("Result ="+balance);
								console.log("Result 2 ="+balance[0]);
								console.log("Result 3 ="+balance["status"]);
								return res.send({message:balance["status"]});
						}).catch(function(e) {
								console.log("Error in getTransactionReceipt setDonor()"+e);
								return res.send({message:balance["status"]});
						});	
		}
	})
});


/** START  GETDONORDETAILSBYID*/
app.post('/getRegisterDonarById', function (req, res) {
	console.log(" ****getRegisterDonarById Details****");
	var aadharNo = parseInt(req.body._aadharNo);
	
	console.log("aadhar No :" + aadharNo);
	var obj = [];
	var m;

	objuserContract.methods.getRegisterDonarById(aadharNo).call(gasLimitUpdCall, (error, result) => {
		if(error){
			console.log("Eroor in get Details == +",error);
		}else{
			console.log("Result of GetData ==",result);
				while(web3.eth.getTransactionReceipt(result) == null) {
					console.log("working on mining");
				}
				console.log("mining completed....")
				
		}
	});
});
/** END GETDONORBYID*/

/* *********************************approve Blood Request************************** */
app.post('/verifyDonor',async function(req, res, next)
{
		console.log("**verifyDonor Blood Request**");
		var aadharNo = parseInt(req.body._aadharNo);
		
		console.log("Request verifyDonor == :" + aadharNo);
	
		 var gasLimit = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27', gas:500000});
            await objuserContract.methods.verifyDonor(aadharNo).send(gasLimitUpd,(error, result) => {
								if(error){
									console.log("Error == "+error);
								}else{
									console.log("Result ==>"+result);
									res.send(result);
								}
			});
});

/******************** getRegisterDonorArray ********************/
app.get('/getRegisterDonorArray',async function(req, res)
{
	console.log("**getRegisterDonorArray**");
	   //let resArray = [];
	   await  objuserContract.methods.getRegisterDonorArray.call(gasLimitUpdCall, (error,result) =>{
			if(error){
				console.log("Eroor in getRegisteredDonorArray == +",error);
			}else{
				let resArray = [];
				const BN = web3.utils.BN;
				//new BN('0xea').toString();
					for(let i=0;i<result.length;i++){
						console.log("RegisterdAadhar id ==> "+result[i]);
						//console.log(new BN(result[i]).toString())
						
						 objuserContract.methods.getRegisterDonarById(result[i]).call({from: '0x296950d91C0De3A84B2B004A75cf0AB110491d27'}, (error, resultRes) => {
							if(error){
								console.log("Eroor in get Details == +",error);
							}else{
								var BN = web3.utils.BN;
								console.log("Zaren =="+resultRes['0']["_hex"]);
								pqr = Number(resultRes['0']["_hex"]);
								console.log("Shubham =="+pqr);
								// console.log("Result of GetData ==",resultRes);
								// console.log("Result of GetData 0 index ==",resultRes['0']);
								var n = {
									"age": Number(resultRes['0']["_hex"]),
									"donarName": resultRes['1'],
									"donarAddress": resultRes['2'],
									"bloodGroup": resultRes['3'],
									"status": Number(resultRes['4']),
									"state": resultRes['5'],
									"mobileNo": Number(resultRes['6'])
								}
								console.log("Result of GetDonarById == N=="+n);
								resArray.push(n);
								console.log("inside else {} == "+resArray);
								if(resArray.length == result.length){
										res.send(resArray);
								}
							}
							
						});
					}
			}
	   });
});


/******************** getRegisterDonorArray ********************/
app.get('/getBloodGroupRequestArray',async function(req, res)
{
	console.log("**getBloodGroupRequestArray**");
	   //let resArray = [];
	   await  objuserContract.methods.getBloodGroupRequestArray.call({from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27'}, (error,result) =>{
			if(error){
				console.log("Eroor in getBloodGroupRequestArray == +",error);
			}else{
				let resArray = [];
				const BN = web3.utils.BN;
				//new BN('0xea').toString();
					for(let i=0;i<result.length;i++){
						console.log("getBloodGroupRequestArray id ==> "+result[i]);
						//console.log(new BN(result[i]).toString())
						
						 objuserContract.methods.getBloodGroupRequestById(result[i]).call(gasLimitUpdCall, (error, resultRes) => {
							if(error){
								console.log("Eroor in get Details == +",error);
							}else{
								console.log("Result of GetData ==",resultRes);
								console.log("Result of GetData 0 index ==",resultRes['0']);
								var n = {
									"requestId":result[i],
									"hospitalId": Number(resultRes['0']["_hex"]),
									"hospitalName": resultRes['1'],
									"bloodGroup": resultRes['2'],
									"availableStatus": Number(resultRes['3']["_hex"])
								}
								console.log("Result of bloodrequestId == N=="+n);
								resArray.push(n);
								console.log("inside else {} == "+resArray);
								if(resArray.length == result.length){
										res.send(resArray);
								}
								//res.send(resArray);
							}
							
						});
						console.log("inside else UPD {} == "+resArray);
						//res.send(resArray);
					}
					//res.status(200).send(resArray);
				console.log("Result of getRegisteredDonorArray ==",resArray);
				//res.send(resArray);
			}
	   });
});
/* ********addBloodGroupRequest********* */

app.post('/addBloodGroupRequest',async function(req, res, next){
             console.log("**Set addBloodGroupRequest Details**");
						 //var requestBloodGroupId = parseInt(req.body.requestBloodGroupId);
						 var hospitalId = parseInt(req.body._hospitalId);
						 var hospitalName = req.body._hospitalName;
						 var bloodGroup = req.body._bloodGroup;
						 var availableStatus = 0; //parseInt(req.body._availableStatus);
						 //var donorId = parseInt(req.body._donorId);
						 //console.log("requestBloodGroupId :" + requestBloodGroupId);
						 console.log("hospitalId :" + hospitalId);
						 console.log("hospitalName :" + hospitalName);
						 console.log("bloodGroup  :" + bloodGroup);
						  console.log("availableStatus:" + availableStatus);
						 var gasLimit = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27', gas:500000});
            			 await objuserContract.methods.addBloodGroupRequest(hospitalId,hospitalName,bloodGroup,availableStatus).send(gasLimitUpd,(error, result) => {
								if(error){
									console.log("Error == "+error);
								}else{
									console.log("Result ==>"+result);
									console.log('Result : ==',result);
									while(web3.eth.getTransactionReceipt(result) == null) {
										console.log("working on mining");
									}
									console.log("mining completed....")
									web3.eth.getTransactionReceipt(result).then(function (balance) {
														console.log("Result ="+balance);
														console.log("Result 2 ="+balance[0]);
														console.log("Result 3 ="+balance["status"]);
														return res.send({message:balance["status"]});
									}).catch(function(e) {
														console.log("Error in getTransactionReceipt addBloodRequest()"+e);
														return res.send({message:balance["status"]});
									});	
								}
						 });
												
});

/* ********getBloodGroupRequestById********* */
app.post('/getBloodGroupRequestById', function (req, res) {
	console.log(" ****getBloodGroupRequestById Details****");
	var requestBloodGroupId = parseInt(req.body._requestBloodGroupId);
	
	console.log("requestBloodGroupId :" + requestBloodGroupId);
	var obj = [];
	var m;
	
	objuserContract.methods.getBloodGroupRequestById(requestBloodGroupId).call({from: '0x296950d91C0De3A84B2B004A75cf0AB110491d27'}, (error, result) => {
		if(error){
			console.log("Eroor in get Details == +",error);
		}else{
			console.log("Result of GetData ==",result);
			//res.send(result);
		}
	});
});

/* *********************************approve Blood Request************************** */
app.post('/approveBloodRequest',async function(req, res, next)
{
		console.log("**approve Blood Request**");
		var requestBloodGroupId = parseInt(req.body._requestBloodGroupId);
		
		console.log("Request Blood GroupId:" + requestBloodGroupId);
	
		 var gasLimit = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27', gas:500000});
            await objuserContract.methods.approveBloodRequest(requestBloodGroupId).send(gasLimit,(error, result) => {
								if(error){
									console.log("Error == "+error);
								}else{
									console.log("Result ==>"+result);
								}
			});
});

/****************reject Blood Request ********** */
app.post('/rejectBloodRequest',async function(req, res, next)
{
	console.log("**reject Blood Request**");
	var requestBloodGroupId = parseInt(req.body._requestBloodGroupId);
	
	console.log("Request Blood GroupId:" + requestBloodGroupId);

	var gasLimit = ({ from:'0x296950d91C0De3A84B2B004A75cf0AB110491d27', gas:500000});
	await objuserContract.methods.rejectBloodRequest(requestBloodGroupId).send(gasLimit,(error, result) => {
						if(error){
							console.log("Error == "+error);
						}else{
							console.log("Result ==>"+result);
						}
	});
});

app.listen(8053, function () {
console.log('app is listening at:8053');
});