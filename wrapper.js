// Ron Penones | October 28th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

import readline from "readline";
import OpenAI from "openai";
import dotenv from "dotenv";

// Dito iyong part kung saan naglo-load tayo ng environment variables mula sa .env file.
dotenv.config();

const client = new OpenAI({ apiKey: process.env.API_KEY_MO_NA_GALING_KAY_OPEN_AI_CHATGPT });

// Ganito magiging itsura ng CLI or command line interface once authenticated na ang API key.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Human> ", // Kapag authenticated na ang API key then ibigsabihin nasa CLI session ka na which means ikaw ito.
});

console.log("Type 'exit' to end session.\n"); // Heto rin puede mo rin baguhin iyong returning message kung ano trip mo.
rl.prompt();

let history = [];

rl.on("line", async (line) => {
  const userInput = line.trim();
  if (userInput.toLowerCase() === "exit") {
    console.log("Thank you for using OpenAI ChatGPT.");
    process.exit(0);
  }

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-5", // or "gpt-4o-mini" kung iyan trip mo.
      messages: [
        ...history,
        { role: "user", content: userInput },
      ],
    });

    const reply = completion.choices[0].message.content.trim();
    console.log(`\nOpenAI ChatGPT> ${reply}\n`); // Heto naman iyong mismong nag-re-response sa iyo.

    // Liitan lang natin iyong rolling history.

    history.push({ role: "user", content: userInput });
    history.push({ role: "assistant", content: reply });
    if (history.length > 10) history = history.slice(-10); // Dito ko nilapat iyong limit pero ikaw bahala kung gusto mo mas mataas.
  } catch (err) {
    console.error("Error:", err.message);
  }

  rl.prompt();
});
