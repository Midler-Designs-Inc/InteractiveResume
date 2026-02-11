# -------------------------------
# Aider Setup and Launch (Windows 11)
# -------------------------------

# 1. Create a dedicated virtual environment for Aider
#    Adjust the path if you want a different location, python versions 3.9–3.12 are supported
py -3.12 -m venv "%USERPROFILE%\venvs\aider"

# 2. Activate the virtual environment
"%USERPROFILE%\venvs\aider\Scripts\activate.bat"

# 3. Upgrade pip and install the latest Aider package
pip install --upgrade pip
pip install aider-chat

# 4. (Optional) Confirm installation
aider --version

# 5. Navigate to your project directory
cd C:\path\to\your\project

# 6. Launch Aider
#    Replace 'qwen3-coder-next' with your local Ollama model if needed
#    --yes-always automatically confirms prompts
#    --no-auto-commits prevents automatic git commits
aider --model ollama/qwen3-coder-next --yes-always --no-auto-commits

# 7. When done with your session, deactivate the virtual environment (or just close the terminal)
deactivate

# 8. (Optional) Delete the virtual environment
rmdir /s /q "%USERPROFILE%\venvs\aider"