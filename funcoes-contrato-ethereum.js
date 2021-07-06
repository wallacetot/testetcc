async function getDadosDosCarros() {
    let contractNumberField = document.getElementById("contractNumber");
    const userInput = contractNumberField.value * 1;
    alert("valorInformadoPeloUsuario: " + userInput);
    try {
      const arrayDadosDosCarros = await smartContract.carros(userInput);
      console.log(arrayDadosDosCarros);

  
    //Modo sintetico onde se concatena um comando junto a outro na mesma linha
    document.getElementById("marcaCarro").innerText = arrayDadosDosCarros[1];
    document.getElementById("modeloCarro").innerText = arrayDadosDosCarros[2];
    document.getElementById("corCarro").innerText = arrayDadosDosCarros[3];
    document.getElementById("velocidadeMaxima").innerText = arrayDadosDosCarros[4];
    
    } catch (err) {
      console.error(err);
      document.getElementById("marcaCarro").innerText = "";
      document.getElementById("modeloCarro").innerText = "";
      document.getElementById("corCarro").innerText = "";
      document.getElementById("velocidadeMaxima").innerText = "";
      contractNumberField.value = 0;
      alert("Houve um erro ao buscar o carro nº: " + userInput);
    }
  }
  
  async function autoLoadOwner() {
    try {
      const contractOwner = await smartContract.owner();
      console.log(contractOwner);
      document.getElementById("spanOwner").innerText = contractOwner;
    } catch (err) {
      console.error(err);
      alert("Houve um erro ao buscar o proprietário do contrato");
    }
  }
  
  async function saveFormData() {
    try {
      var tx;
      var txReceipt;
      tx = await smartContractWithSigner.registerCarros(
        document.frmCarros.addMarcaCarro.value,
        document.frmCarros.addModeloCarro.value,
        document.frmCarros.addCorCarro.value,
        document.frmCarros.addVelocidadeMaxima.value
      );
      console.log("transacao enviada ao metamask. pendente...", tx);
      alert("Transação enviada... " + tx.hash + " aguarde a confirmação da Blockcnain...");
      txReceipt = await tx.wait();
      console.log("transacao processada...", txReceipt);
      if (txReceipt.status == 1) {
        alert("Transação processada: " + tx.hash + "  - Registro salvo na Blockchain. Status: " + txReceipt.status);
      } else {
        alert("Transação processada: " + tx.hash + "  - Mas houve um erro na blockchain. Veja pelo etherscan");
      }
    } catch (err) {
      console.error(err);
      alert("Houve um erro ao salvar o registro do contrato do novo carro");
    }
  }
