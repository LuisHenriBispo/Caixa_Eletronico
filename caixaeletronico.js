var saldo = 1200.00; //Float
var extrato = [("Depósito", saldo)];
var nome = prompt("Digite seu nome: ");
var senha=3589;
		function inicio() {
			var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo \n2.) Extrato \n3.) Saque \n4.) Deposito \n5.) Transferencia \n6.) Sair'));

			if (escolha === 1) {
				ver_saldo();
			} else if (escolha ===2) {
				ver_extratro();
			}
			 else if (escolha === 3) {
				fazer_saque();
			} else if (escolha === 4) {
				fazer_deposito();
			} else if (escolha ===5) {
				fazer_transferencia();
			}
			else if (escolha === 6) {
				sair();
			} else {
				erro();
			}
		}		

		function ver_saldo() {
			senha = prompt("Digite sua senha: ")
    		if (senha == "3589"){
			alert('Seu saldo atual é: R$' + saldo);}
				else{prompt("Senha incorreta!");
			inicio();
			}
      inicio();
		}

		function ver_extratro() {
            var senha = prompt("Digite sua senha: ");
            
            // verifica se a senha está correta
            if (senha != "3589") {
              alert("Senha incorreta. Tente novamente.");
              ver_extratro(); // chama a função novamente
              return; // interrompe a execução da função
            }
          
            // exibe o extrato
            var extrato = [ "Compra no mercado", -50.00, "Depósito", 200.00, "Kit teclado e mouse",-84.00]; // exemplo de extrato
            alert("Extrato:");
            for (var i = 0; i < extrato.length; i += 2) {
              var transacao = extrato[i];
              var valor = extrato[i+1];
              alert(transacao + ": R$" + valor.toFixed(2));
            }
            inicio();
          }

          function fazer_saque() {
            var senha = prompt("Digite sua senha: ");
            if (senha == "3589") {
                var saque = parseFloat(prompt('Qual o valor para saque?'));
                if (saque <= 0 || isNaN(saque)) {
                    alert('Operação não autorizada!');
                } else if (saque > saldo) {
                    alert('Operação não autorizada!');
                } else {
                    saldo -= saque;
                    extrato.push(["Saque", -saque]);
                    alert(`Saque de R$${saque.toFixed(2)} realizado com sucesso!`);
                }
                inicio();
            } else {
                alert('Senha inválida! Tente novamente.');
                fazer_saque();
            }
        }

        function fazer_deposito() {
            var deposito = parseFloat(prompt('Qual o valor para depósito?'));
            var senha = prompt("Digite sua senha: ");
            
            if (senha === "3589") {
              if (isNaN(deposito) || deposito <= 0) {
                alert('Operação não autorizada!');
              } else {
                saldo += deposito;
                extrato.push(["Depósito", deposito]);
                alert(`Depósito de R$${deposito.toFixed(2)} realizado com sucesso!`);
                inicio();
              }
            } else {
              alert('Senha inválida! Tente novamente.');
              fazer_deposito();
            }
          }
          
            

        function fazer_transferencia() {
            var senha = prompt("Digite sua senha: ");
            if (senha == "3589") {
              var conta = prompt("Digite a conta de destino: ");
              var valor = parseFloat(prompt("Digite o valor a ser transferido: R$"));
              if (valor <= 0) {
                alert("Operação não autorizada!");
                inicio();
              } else if (saldo - valor < 0) {
                alert("Operação não autorizada!");
                inicio();
              } else {
                saldo -= valor;
                extrato.push(["Transferência para conta " + conta, -valor]);
                alert(`\nTransferência de R$${valor.toFixed(2)} realizada para a conta ${conta} com sucesso!\n`);
                inicio();
              }
            } else {
              alert("Senha incorreta!");
              inicio();
            }
          }

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
      inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
            if (confirma) {
            alert(nome + ', foi um prazer ter você por aqui! Volte sempre!');
            window.close();
			} else {
				inicio();
			}
		}

		inicio();