# Base Ubuntu
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
        curl \
        ca-certificates \
        gnupg \
        lsb-release \
        git \
        python3 \
        python3-pip \
        unzip \
        zstd && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /ollama

# Install Ollama Linux
RUN curl -fsSL https://ollama.com/install.sh | sh

# Set Ollama to listen on all interfaces
ENV OLLAMA_HOST=0.0.0.0:11434

# Expose Ollama API port
EXPOSE 11434

# Start Ollama server on container start
CMD ["ollama", "serve"]