# Use Python 3.11 slim base image
FROM python:3.11-slim

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV LANG=C.UTF-8

# Install system dependencies for building packages
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip, setuptools, wheel
RUN python -m pip install --upgrade pip setuptools wheel

# Install Aider
RUN pip install aider-chat

# Set working directory inside container
WORKDIR /workspace

# Default entrypoint: run Aider in server mode
ENTRYPOINT ["aider"]
