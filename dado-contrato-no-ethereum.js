const contractAddress = "0xf0a420c4099fafd0948e871b2f2c33048f24a5db";
var smartContract;
var smartContractWithSigner;
//Both ways are valid
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "addMarcaCarro",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addModeloCarro",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addCorCarro",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "addVelocidadeMaxima",
				"type": "uint256"
			}
		],
		"name": "registerCarros",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "carros",
		"outputs": [
			{
				"internalType": "string",
				"name": "marcaCarro",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "modeloCarro",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "corCarro",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "velocidadeMaxima",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
