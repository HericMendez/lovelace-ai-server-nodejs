# Lovelace.ai - Back-end

## 1. Introduction

Lovelace is a virtual tutor prototype that utilizes Artificial Intelligence to assist in teaching mathematics. The project offers two main approaches:
- **Interactive chat with LangChain:** Responds to questions in real time.
- **Knowledge model with LangGraph:** Structures mathematical content in a graph format.

Developed with React on the front-end and Node.js on the back-end, Lovelace aims to make learning more dynamic and accessible.

## 2. Back-end Installation and Execution

1. **Clone the repository:**

   - Using SSH:
     ```bash
     git clone git@github.com:HericMendez/lovelace-ai-server-nodejs
     ```
   - Using HTTPS:
     ```bash
     git clone https://github.com/HericMendez/lovelace-ai-server-nodejs
     ```

2. **Navigate to the project folder:**
   ```bash
   cd lovelace-ai-server-nodejs
    ```
3. **Install dependencies and start the application:**
   ```bash
   npm install
   npm start
    ```

## 3. Front-end Installation and Execution

To use the AI model in a chat interface, you need to install the front-end locally.
Repository and instructions: [lovelace-ai-server](https://github.com/HericMendez/lovelace-ai-server-nodejs)
If you prefer to test without the front-end, follow the step below.

## 4. Usage and Routes
- Test via Postman: Use tools like Postman to send requests directly to the API.

### Example of a POST request:
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
            "content": "What is the square root of 64?"
            }]
        }
    ```
3. Expected response:
    ```bash
        {
        "response": "AI: The square root of 64 is 8 because 8 multiplied by 8 equals 64."
        }
    ```
### Routes
- [GET] Ping Test
    ```bash
    http://localhost:3000/api/ping
    ```
- [POST] LangChain model route
    ```bash
    http://localhost:3000/api/chat/langChain
    ```
- [POST] LangGraph model route
    ```bash
    http://localhost:3000/api/chat/langGraph
    ```

