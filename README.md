# Run Ollama
# ==================================
cd ollama
docker compose up -d --build

# Pull Ollama model (one time only, ollama container must be running)
docker compose exec ollama bash
ollama pull qwen3-coder-next

# Run Aider
# ==================================
cd aider
docker compose up -d --build
docker compose exec aider bash
aider --model qwen3-coder-next --yes-always --no-auto-commits