
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
	sangue: "O+",
	doacao: "10/01/2024",
}]


// Função para cadastro
function cadastrar() {
	// Mostrar mensagem de apresentação
	console.log("Função para cadastro!")

	// Pedir para o usuário os seus dados
	const usuarioNome = prompt("Qual seu nome e sobrenome?")
	const usuarioNascimento = prompt("Qual sua data de nascimento? Data no formato dd/mm/aaaa")
	const usuarioPeso = Number(prompt("Qual seu peso? Somente números"))
	const usuarioSangue = prompt("Qual seu tipo sanguíneo?")
	const usuarioDoacao = prompt("Quando você doou sangue pela última vez? Data no formato dd/mm/aaaa")

	// Organizar os dados em um objeto
	const usuario = {
		nome: usuarioNome,
		nascimento: usuarioNascimento,
		peso: usuarioPeso,
		sangue: usuarioSangue,
		doacao: usuarioDoacao,
	}

	// Adicionar dados ao array
	dados.push(usuario)

	// Apresentar mensagem de sucesso
	console.log(`Dados cadastrados com sucesso!`)
	console.log(`Nome: ${usuario.nome} | Data de nascimento: ${usuario.nascimento} | Peso: ${usuario.peso}kg | Tipo sanguíneo: ${usuario.sangue} | Data da última doação: ${usuario.doacao}`)
	console.log("---------------")
}

// Função para listar
function listar() {
	console.log("Função de lista")
}

// Função para buscar
function buscar() {
	console.log("Função de busca")
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
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
