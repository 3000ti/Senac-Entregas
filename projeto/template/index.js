
// Definições básicas
let continuar = true

// Banco de dados
const dados = [{
	nome: "José da Silva",
	nascimento: "01/02/1980",
	peso: 82,
	sangue: "AB+",
	doacao: "09/09/2023",
}, {
	nome: "Maria Oliveira",
	nascimento: "31/12/1991",
	peso: 64,
	sangue: "O-",
	doacao: "10/01/2024",
}, {
	nome: "Pedro Cardozo",
	nascimento: "06/12/1969",
	peso: 89,
	sangue: "A+",
	doacao: "10/01/2024",
}, {
	nome: "Joana Pereira",
	nascimento: "15/05/1995",
	peso: 70,
	sangue: "O-",
	doacao: "11/10/2023",
}]


// Função para cadastro
function cadastrar() {
	// Mostrar mensagem de apresentação
	console.log("Cadastro de doadores!")

	// Organizar os dados em um objeto
	const doador = {
		nome: prompt("Qual seu nome e sobrenome?"),
		nascimento: prompt("Qual sua data de nascimento? Data no formato dd/mm/aaaa"),
		peso: Number(prompt("Qual seu peso? Somente números")),
		sangue: prompt("Qual seu tipo sanguíneo?"),
		doacao: prompt("Quando você doou sangue pela última vez? Data no formato dd/mm/aaaa"),
	}

	// Adicionar dados ao array
	dados.push(doador)

	// Apresentar mensagem de sucesso
	console.log(`Dados cadastrados com sucesso!`)
	console.log("---------------")
}


// Função para listar
function listar() {
	// Mostrar mensagem de apresentação
	console.log("Lista de doadores!")

	// Percorrer todos os doadores
	for (let i = 0; i < dados.length; i++) {
		// Atribuir posição à uma variável
		const item = dados[i]

		// Imprimir no console
		console.log(`${i + 1} | ${item.nome} | ${item.nascimento} | ${item.peso} | ${item.sangue} | ${item.doacao}`)
	}

	// Apresentar mensagem de sucesso
	console.log(`Dados listados com sucesso! ${dados.length} doadores encontrados.`)
	console.log("---------------")
}


// Função para buscar
function buscar() {
	// Mostrar mensagem de apresentação
	console.log("Busca de doadores!")

	// Perguntar o tipo sanguíneo desejado
	const busca = prompt("Qual o tipo sanguíneo desejado?")

	// Percorrer todos os doadores
	for (let i = 0; i < dados.length; i++) {
		// Atribuir posição à uma variável
		const item = dados[i]

		// Verificar se é do tipo sanguíneo desejado
		if (item.sangue === busca) {
			// Imprimir no console
			console.log(`${i + 1} | ${item.nome} | ${item.nascimento} | ${item.peso} | ${item.sangue} | ${item.doacao}`)	
		}
	}

	// Apresentar mensagem de sucesso
	console.log(`Resultados listados com sucesso!`)
	console.log("---------------")
}


// Função para sair
function sair() {
	// Mostrar mensagem de apresentação
	console.log("Função de saída! Para reiniciar, atualize a página.")

	// Interromper programa
	continuar = false
}


// Loop para perguntar ao usuário
while (continuar == true) {

	// Formatar pergunta
	let pergunta  = "SISTEMA DE DOARES DE SANGUE\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}

}
