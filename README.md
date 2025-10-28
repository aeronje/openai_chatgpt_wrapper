# openai_chatgpt_wrapper
This repository provides a setup for running the OpenAI ChatGPT API with Node.js via Bash or PowerShell.
```
aeronje
└── openai_chatgpt_wrapper/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── wrapper.js
    └── .env
```
# Important reminder (English well-mannered version)
FYI! The OpenAI ChatGPT API is not free — you will need a paid plan/tier with active credits before you clone or deploy this repo. You can still clone or deploy it though but I do not want you to get disappointed later on.

# Important reminder (Taglish tolonges gedli etneb version)
Hello Bes! Kung timawa vibes ka and subtly buraot huwag mo na ituloy. Ayoko lang masaktan ka. Thank me later.

# Instructions

**Bes, nagbilin na ako sa iyo sabi ko sa iyo huwag mong susubukan kung purdoy ka naman, ikaw bahala sinasabi ko sa iyo.**

**If you are using Windows, [please make sure to install git](https://github.com/aeronje/git_setup/blob/main/README.md)**

1. Clone this repository using terminal or Powershell.
   ```
   git clone https://github.com/aeronje/openai_chatgpt_wrapper
   ```

2. Just minimize the terminal or powershell after cloning, change directory.
```
cd openai_chatgpt_wrapper
```
3. [Install Chocolatey if you are using Winndows, proceed to step 4 if you are using Linux](https://github.com/aeronje/chocolatey_setup)

4. Run the following commands.

**For Windows**
```
choco install nodejs -y
```
```
choco install npm -y
```
```
nvm install --lts
```
```
nvm alias default lts/*
```
```
node -v
```
```
npm -v
```
```
nvm -v
```
```
npm install openai dotenv
```
**For Linux**
```
sudo apt install nodejs -y
```
```
sudo apt install npm -y
```
```
nvm install --lts
```
```
nvm alias default lts/*
```
```
node -v
```
```
npm -v
```
```
nvm -v
```
```
npm install openai dotenv
```
5. Run the wrapper.js from same terminal from Step 1, just copy the command below.
```
npm start
```  
