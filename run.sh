#!/bin/bash
# Script de demostración local - Abre el sitio en tu navegador

# Detecta el sistema operativo
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if command -v xdg-open &> /dev/null; then
        xdg-open index.html
    else
        echo "Por favor abre index.html en tu navegador"
    fi
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start index.html
else
    echo "Por favor abre index.html en tu navegador"
fi

echo "Sitio profesional abierto en tu navegador..."
