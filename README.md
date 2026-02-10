# Run Ollama
# ====================================================================
cd ollama
docker compose up -d --build

# Pull a new Ollama model (ollama container must be running)
# ====================================================================
cd ollama
docker compose exec ollama bash
ollama pull qwen2.5-coder:14b

# Remove a pulled Ollama model (ollama container must be running)
# ====================================================================
cd ollama
docker compose exec ollama bash
ollama rm qwen2.5-coder:14b

# Run Aider
# ====================================================================
cd aider
docker compose up -d --build
docker compose exec aider bash
aider --model ollama/qwen2.5-coder:14b --yes-always --no-auto-commits