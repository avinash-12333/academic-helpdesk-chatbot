# Academic Helpdesk Chatbot

A Flask chatbot that searches college PDF documents and uses a local Ollama model to generate answers.

## Requirements

- Python 3.11 or newer
- [Ollama](https://ollama.com/) with the `qwen2.5-coder:latest` model

## Setup

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
ollama pull qwen2.5-coder:latest
```

Place your college PDF files in `Uploads/`, then run:

```sh
python App.py
```

Open <http://127.0.0.1:5005> in your browser. Ollama must be running locally.

PDF files in `Uploads/` are intentionally excluded from Git so college documents are not published with the source code.