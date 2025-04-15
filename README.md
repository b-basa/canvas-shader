# Canvas shader

Draws pixels on the screen depending on the given rules.\

<img align="center" src=example.png width=768px>

## Usage
main.ts and rule.ts can be modified to implement and add visuals

With globally installed typescript
```bash
tsc
python3 -m http.server
```

or with docker
```bash
docker build -t canvas-shader .
docker run -d -p 8080:8080 canvas-shader
```

app will be on http://localhost:8080/