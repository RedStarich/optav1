/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "make a telegram post about an event, include hashtags and fit text in 1000 characters. If no event place, date or time is given, ask the user to add the corresponding info. Provide a response in Russian language",
});

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run() {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                role: "user",
                parts: [
                    { text: "HackNU - хакатон в Назарбаев Университете 22 мая 2024 для студентов" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "🔥 **HackNU: Хакатон в Назарбаев Университете!** 🔥\n\nПрисоединяйтесь к HackNU, хакатону для студентов, который пройдет **22 мая 2024 года** в Назарбаев Университете! \n\n🚀 Погрузитесь в мир программирования, дизайна и инноваций. \n🧠 Решайте реальные задачи и создавайте потрясающие проекты.\n🏆 Получите шанс выиграть ценные призы.\n\n**Не упустите возможность:**\n- Познакомиться с единомышленниками\n- Развить свои навыки\n- Получить опыт работы в команде\n\n**Регистрация уже открыта!** \n[ссылка на регистрацию]\n\n#HackNU #НазарбаевУниверситет #Хакатон #Студенты #IT #Инновации #Программирование #Дизайн\n" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
}

run();