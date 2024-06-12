
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


// Função para formatar dados
function formatar(objeto, indice) {
	// Criar string vazia
	let string = ""

	// Verificar se há índice
	if (indice !== "") {
		// Verificar como será o peso
		const peso = isNaN(objeto.peso) ? objeto.peso : objeto.peso + "kg"

		// Criar objeto formatado
		const of = {
			indice: indice.toString().padEnd(2, " "),
			nome: objeto.nome.padEnd(20, " "),
			nascimento: objeto.nascimento.padEnd(13, " "),
			peso: peso.padEnd(6, " "),
			sangue: objeto.sangue.padEnd(6, " "),
			doacao: objeto.doacao,
		}

		// Inserir as informações na string
		string = `${of.indice} | ${of.nome} | ${of.nascimento} | ${of.peso} | ${of.sangue} | ${of.doacao}`
	}
	else {
		// Inserir as informações na string
		string = `Nome: ${objeto.nome} | Aniversário: ${objeto.nascimento} | Peso: ${objeto.peso}kg | Tipo: ${objeto.sangue} | Última doação: ${objeto.doacao}`
	}

	// Retornar string formatada
	return string
}


// Função para cadastro
function cadastrar() {
	// Mostrar mensagem de apresentação
	console.log("Cadastro de doadores!")

	// Pedir para o usuário os seus dados
	const usuarioNome = prompt("Qual seu nome e sobrenome?")
	const usuarioNascimento = prompt("Qual sua data de nascimento? Data no formato dd/mm/aaaa")
	const usuarioPeso = Number(prompt("Qual seu peso? Somente números"))
	const usuarioSangue = prompt("Qual seu tipo sanguíneo?")
	const usuarioDoacao = prompt("Quando você doou sangue pela última vez? Data no formato dd/mm/aaaa")

	// Organizar os dados em um objeto
	const doador = {
		nome: usuarioNome,
		nascimento: usuarioNascimento,
		peso: usuarioPeso,
		sangue: usuarioSangue,
		doacao: usuarioDoacao,
	}

	// Adicionar dados ao array
	dados.push(doador)

	// Apresentar mensagem de sucesso
	console.log(`Dados cadastrados com sucesso!`)
	console.log(formatar(doador, ""))
	console.log("---------------")
}


// Função para listar
function listar() {
	// Mostrar mensagem de apresentação
	console.log("Lista de doadores!")

	// Verificar se temos dados cadastrados
	if (dados.length > 0) {
		// Montar cabeçalho da lista
		const cabecalho = {
			nome: "NOME E SOBRENOME",
			nascimento: "ANIVERSÁRIO",
			peso: "PESO",
			sangue: "TIPO",
			doacao: "ÚLTIMA DOAÇÃO",
		}
	
		// Imprimir cabeçalho
		console.log(formatar(cabecalho, "#"))

		// Laço de repetição (for... of)
		for (const [ indice, objeto ] of dados.entries()) {
			// Imprimir dados formatados
			console.log(formatar(objeto, indice + 1))
		}

		// Apresentar mensagem de sucesso
		console.log(`Dados listados com sucesso! ${dados.length} doadores encontrados.`)
	}
	else {
		// Apresentar mensagem de erro
		console.log(`Nenhum doador encontrado! Cadastre novos doadores.`)
	}

	// Imprimir divisor
	console.log("---------------")
}


// Função para buscar
function buscar() {
	// Mostrar mensagem de apresentação
	console.log("Busca de doadores!")

	// Perguntar o tipo sanguíneo desejado
	const busca = prompt("Qual o tipo sanguíneo desejado?")
	const resultados = []

	// Percorrer todos os doadores
	for (const [ indice, objeto ] of dados.entries()) {
		// Verificar se é do tipo sanguíneo desejado
		if (objeto.sangue === busca) {
			// Adicionar objeto formatado à lista de resultados
			resultados.push(formatar(objeto, indice + 1))
		}
	}

	// Verificar se há resultados na lista
	if (resultados.length > 0) {
		// Montar cabeçalho da lista
		const cabecalho = {
			nome: "NOME E SOBRENOME",
			nascimento: "ANIVERSÁRIO",
			peso: "PESO",
			sangue: "TIPO",
			doacao: "ÚLTIMA DOAÇÃO",
		}
	
		// Imprimir cabeçalho
		console.log(formatar(cabecalho, "#"))

		// Percorrer todos os resultados
		for (const item of resultados) {
			// Imprimir dados
			console.log(item)
		}

		// Apresentar mensagem de sucesso
		console.log(`Resultados listados com sucesso! ${resultados.length} doadores encontrados.`)
	}
	else {
		// Apresentar mensagem de erro
		console.log(`Nenhum doador encontrado! Tente novamente com outro tipo sanguíneo.`)
	}

	// Imprimir divisor
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

	// Limpar console
	console.clear()

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
