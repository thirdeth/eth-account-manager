# ETHEREUM ACCOUNT MANAGER

Small project to handle basic tasks in security of a ethereum wallet.

## Create Wallet

To create a wallet just run

```
WALLET_PASSWORD=<your_passowrd> node create-wallet.js
```

where `WALLET_PASSWORD` is a password of your choice used to encrypt the file containing the information to access the wallet.

The encrypted keys will be saved in a file in this same folder called `encrypted_wallet.json`.

**Both the passoword and json file are neded to access the wallet**
