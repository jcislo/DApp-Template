let resolverContractAddress = "0x9c4c3b509e47a298544d0fd0591b47550845e903";
let resolverABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "interfaceID",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "key",
                "type": "string"
            },
            {
                "name": "value",
                "type": "string"
            }
        ],
        "name": "setText",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "contentTypes",
                "type": "uint256"
            }
        ],
        "name": "ABI",
        "outputs": [
            {
                "name": "contentType",
                "type": "uint256"
            },
            {
                "name": "data",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "x",
                "type": "bytes32"
            },
            {
                "name": "y",
                "type": "bytes32"
            }
        ],
        "name": "setPubkey",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "content",
        "outputs": [
            {
                "name": "ret",
                "type": "bytes32"
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
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "addr",
        "outputs": [
            {
                "name": "ret",
                "type": "address"
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
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "key",
                "type": "string"
            }
        ],
        "name": "text",
        "outputs": [
            {
                "name": "ret",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "contentType",
                "type": "uint256"
            },
            {
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "setABI",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "name",
        "outputs": [
            {
                "name": "ret",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "name",
                "type": "string"
            }
        ],
        "name": "setName",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "setContent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "pubkey",
        "outputs": [
            {
                "name": "x",
                "type": "bytes32"
            },
            {
                "name": "y",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "setAddr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "ensAddr",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "a",
                "type": "address"
            }
        ],
        "name": "AddrChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "ContentChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            }
        ],
        "name": "NameChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "contentType",
                "type": "uint256"
            }
        ],
        "name": "ABIChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "x",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "y",
                "type": "bytes32"
            }
        ],
        "name": "PubkeyChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "indexedKey",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "key",
                "type": "string"
            }
        ],
        "name": "TextChanged",
        "type": "event"
    }
]

let resolvercontract;

let ERC20ABI = [
    {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "internalType": "bool",
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
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
            "internalType": "bool",
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
    "inputs": [],
    "name": "decimals",
    "outputs": [
        {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
        }
    ],
    "name": "increaseAllowance",
    "outputs": [
        {
            "internalType": "bool",
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
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
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
    "name": "symbol",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
        }
    ],
    "name": "decreaseAllowance",
    "outputs": [
        {
            "internalType": "bool",
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
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "internalType": "bool",
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
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
}
]
let tokenContract;
let tokenContractAddress;
let tokenSymbol;
let tokenTotalSupply;
let Balance;

let provider;
let signer;


async function initialize(web3) {
    ethereum.enable();
    provider = new ethers.providers.Web3Provider(web3.currentProvider)
    utils = ethers.utils;

    let accounts = await provider.listAccounts();
    displayEth(provider);
    signer = provider.getSigner(accounts[0]);

    resolverContract = new ethers.Contract(resolverContractAddress, resolverABI, signer);
    document.getElementById("myAddress").innerHTML = "Address: <strong>" + accounts[0] + "</strong>"

}

async function displayEth(provider) {
    let accounts = await provider.listAccounts();
    let balance = await provider.getBalance(accounts[0]);
    console.log(utils.formatUnits(balance, 18));
    document.getElementById("myEthBalance").innerHTML = "My Eth Balance: <strong>" + utils.formatUnits(balance, 18) + "</strong>"
}

async function sendEth() {
    let address = document.getElementById("addressTo").value
    address = resolveAddress(address);
    let amount = document.getElementById("toAmount").value
    let tx = {
        to: address,
        value: utils.parseEther(amount)
    }
    let sendPromise = signer.sendTransaction(tx);
}

async function resolveAddress(address){
    if(address.includes(".")){
        let nameHash = utils.namehash(address)
        address = await resolverContract.addr(nameHash);
    }
    return address;
}

async function displayToken(token) {
    tokenName = await token.name();
    tokenSymbol = await token.symbol();
    tokenC = await token.address;
    tokenSupply = utils.formatUnits(await token.totalSupply(), 8);
    tokenBalance = utils.formatUnits(Balance, 8);

    document.getElementById("name").innerHTML = "Token: <strong>" + tokenName; + "</strong>"
    document.getElementById("symbol").innerHTML = "Symbol: <strong>" + tokenSymbol; + "</strong>"
    document.getElementById("totalSupply").innerHTML = "Total Supply: <strong>" + tokenSupply; + "</strong>"
    document.getElementById("contract").innerHTML = "Contract: <strong>" + tokenC; + "</strong>"
    document.getElementById("balance").innerHTML = "Balance: <strong>" + tokenBalance; + "</strong>"
}

async function loadToken(){
    let address = document.getElementById("tokenToLoad").value;
    console.log(address)
    address = await resolveAddress(address);
    console.log(address);
    tokenContractAddress = address;
    
    tokenContract = new ethers.Contract(tokenContractAddress, ERC20ABI, signer);
    tokenTotalSupply = await tokenContract.totalSupply();
    Balance = await tokenContract.balanceOf(signer._address);
    displayToken(tokenContract);
}

async function transfer(token) {
    let address = document.getElementById("transferTo").value;
    address = resolveAddress(address);
    
    let amount = document.getElementById("transferAmount").value;
    amount = ethers.utils.parseUnits(amount, 8);

    await tokenContract.transfer(address, amount);
}