cd aider
docker compose up --build

cd aider
docker compose exec aider bash
aider --model ollama/qwen3-coder:30b --yes-always