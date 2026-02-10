# Run Ollama
# ====================================================================
cd ollama
docker compose up -d --build

# Pull a new Ollama model (ollama container must be running)
# ====================================================================
cd ollama
docker compose exec ollama bash
ollama pull deepseek-coder-v2:16b

# Remove a pulled Ollama model (ollama container must be running)
# ====================================================================
cd ollama
docker compose exec ollama bash
ollama rm deepseek-coder-v2:16b

# Run Aider
# ====================================================================
cd aider
docker compose up -d --build
docker compose exec aider bash
aider --model ollama/deepseek-coder-v2:16b --yes-always --no-auto-commits

# Alternate Start Modes
# ====================================================================
aider --architect --model ollama/deepseek-coder-v2:16b --yes-always --no-auto-commits
aider --edit-format udiff --model ollama/deepseek-coder-v2:16b --yes-always --no-auto-commits