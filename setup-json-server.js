/**
 * This script helps you set up and run the JSON Server for your portfolio
 */

const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")

// Check if json-server is installed
console.log("Checking if json-server is installed...")

exec("npx json-server --version", (error) => {
  if (error) {
    console.log("json-server is not installed. Installing...")

    exec("npm install -g json-server", (installError) => {
      if (installError) {
        console.error("Failed to install json-server:", installError)
        console.log("Please install json-server manually: npm install -g json-server")
        return
      }

      console.log("json-server installed successfully!")
      startJsonServer()
    })
  } else {
    console.log("json-server is already installed.")
    startJsonServer()
  }
})

function startJsonServer() {
  const dbPath = path.join(process.cwd(), "db.json")

  // Check if db.json exists
  if (!fs.existsSync(dbPath)) {
    console.error("db.json file not found in the current directory.")
    console.log("Please make sure you have created the db.json file with your portfolio data.")
    return
  }

  console.log("Starting JSON Server...")
  console.log("Your API will be available at: http://localhost:3001")

  // Start the JSON server
  const server = exec("json-server --watch db.json --port 3001", (serverError) => {
    if (serverError) {
      console.error("Failed to start json-server:", serverError)
      return
    }
  })

  server.stdout.on("data", (data) => {
    console.log(data)
  })

  server.stderr.on("data", (data) => {
    console.error(data)
  })

  console.log("Press Ctrl+C to stop the server.")
}
