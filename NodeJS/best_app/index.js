const question = [
    "- O que aprendi hoje?",
    "- O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "- que me deixou feliz hoje?",
    "- Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + question[index] + " > " )
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
   if (answers.length < question.length) {
    ask(answers.length)
} else {
    process.exit()
}
})

process.on('exit', () => {
    console.log(`
    Muito bem Lucas, hora de refletir nas respostas!
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceue você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje: 
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje
    
    Volte amanhã para nocas reflexões!! 
    `)
})