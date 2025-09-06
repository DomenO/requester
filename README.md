# Requester

HTTP Response Simulator for testing and development. A simple tool for simulating various HTTP responses with configurable parameters.

## 🌐 Demo

Try it now: **[req.fadme.dev](https://req.fadme.dev)**

## ✨ Features

- ⏱️ **Configurable Delay** - simulate slow network connections
- 📊 **Any HTTP Status** - test error handling with any status codes
- 🎯 **Custom Headers** - full control over response headers
- 🔀 **CORS Support** - works from any domain
- 🚀 **Fast Performance** - built with Bun.js

## 🛠 Installation & Setup

### Requirements

- [Bun](https://bun.sh) runtime

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/DomenO/requester.git
cd requester
```

2. **Install dependencies:**
```bash
bun install
```

3. **Start the server:**
```bash
bun run index.ts
```

Server will be available at: `http://localhost:3000`

### Alternative Ways to Run

**Using Docker:**
```bash
docker build -t requester .
docker run -p 3000:3000 requester
```

## 📖 Usage

### Basic Usage

Send HTTP requests to the server with parameters in the query string:

```bash
curl "http://localhost:3000?status=200&body=Hello%20World"
```

### Parameters

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| `pending` | Response delay in milliseconds | `0` |
| `status` | HTTP status code | `200` |
| `body` | Response body content | empty string |
| `_header` | Headers (underscore prefix is automatically removed) | - |

### Usage Examples

**Response with delay:**
```bash
curl "http://localhost:3000?pending=2000&body=Delayed%20response"
```

**404 error:**
```bash
curl "http://localhost:3000?status=404&body=Not%20Found"
```

**JSON response with custom headers:**
```bash
curl -i "http://localhost:3000?_content-type=application/json&body={\"success\":true}"
```

**Slow API simulation:**
```bash
curl "http://localhost:3000?pending=3000&status=200&_content-type=application/json&body={\"data\":[1,2,3]}"
```

## 🔧 Development

### Project Structure

```
requester/
├── index.ts          # Main server code
├── landing.html      # Landing page
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── Dockerfile        # Docker configuration
└── README.md         # Documentation
```

### Scripts

```bash
# Run in development mode
bun run index.ts

# Build (if needed)
bun build index.ts

# Type checking
bun run tsc --noEmit
```

### API Endpoints

- `GET /` - Landing page (when no parameters)
- `GET|POST|PUT|DELETE /*` - Response simulation with parameters

## 🐳 Docker

**Build image:**
```bash
docker build -t requester .
```

**Run container:**
```bash
docker run -p 3000:3000 requester
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Create a Pull Request

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Demo:** [https://req.fadme.dev](https://req.fadme.dev)
- **GitHub:** [https://github.com/DomenO/requester](https://github.com/DomenO/requester)
- **Feedback:** [Issues](https://github.com/DomenO/requester/issues)

---

Made with ❤️ by [fadme.dev](https://fadme.dev)
