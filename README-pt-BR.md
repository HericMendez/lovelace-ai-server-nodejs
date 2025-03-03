
# Lovelace.ai - Back-end

## 1. Introdução

Lovelace é um protótipo de tutor virtual que utiliza Inteligência Artificial para auxiliar no ensino de matemática. O projeto oferece duas abordagens principais:
- **Chat interativo com LangChain:** Responde perguntas em tempo real.
- **Modelo de conhecimento com LangGraph:** Estrutura o conteúdo matemático em forma de grafo.

Desenvolvido com React no front-end e Node.js no back-end, Lovelace busca tornar o aprendizado mais dinâmico e acessível.

## 2. Instalação e Execução do Back-end

1. **Clone o repositório:**

   - Por SSH:
     ```bash
     git clone git@github.com:HericMendez/lovelace-ai-server-nodejs
     ```
   - Por HTTPS:
     ```bash
     git clone https://github.com/HericMendez/lovelace-ai-server-nodejs
     ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd lovelace-ai-server-nodejs
    ```
3. **Instale as dependências e inicie a aplicação:**
   ```bash
   npm install
   npm run dev
    ```
## 2. Instalação e Execução do Front-end
Para usar o modelo de IA em uma interface de chat, você precisa instalar o front-end localmente.
Repositório e instruções: [lovelace-ai-server](https://github.com/HericMendez/lovelace-ai-server-nodejs)
Caso prefira testar sem o front-end, siga o passo abaixo.

## 4. Utilização e Rotas
- Teste via Postman: Utilize ferramentas como o Postman para enviar requisições diretamente à API.

### Exemplo de requisição POST:
1. Headers:
   ```bash
   {
    "Content-Type": "application/json"
    "Authorization": "Bearer [TOGETHER_AI_API_KEY]"
   }
   ```
2. Body:
    ```bash
        {
        "messages": [  
            { 
            "role": "user", 
            "content": "Qual é a raiz quadrada de 64?" 
            }]
        }
    ```
3. Resposta esperada:
    ```bash
        {
        "response": "AI: A raiz quadrada de 64 é 8, pois 8 multiplicado por 8 resulta em 64."
        }
    ```
### Rotas
- [GET] Ping Test 
    ```bash
    http://localhost:3000/api/ping
    ```
- [POST] Rota do modelo LangChain [POST]
    ```bash
    http://localhost:3000/api/chat/langChain
    ```
- [POST] Rota do modelo LangGraph
    ```bash
    http://localhost:3000/api/chat/langGraph
    ```