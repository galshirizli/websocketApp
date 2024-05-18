# Home Exercise – Secure WebSocket

## Description
This solution demonstrates a setup with three containers:

1. **App1**: A simple Node.js application displaying "Hello World". It is exposed on port 3000.
2. **App2**: A WebSocket application that echoes messages sent to it. It is exposed on port 3001.
3. **Nginx**: A custom Nginx container that routes traffic to App1 and App2, operating with HTTPS protocol using a self-signed certificate.

## System Diagram

## Prerequisites
- RHEL 8 / CentOS Stream 8 server
- Docker and Docker Compose installed on the server

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/galshirizli/websocketApp.git
   ```
2. Run Docker Compose:
   ```sh
   docker-compose -f ./websocketApp/docker-compose.yaml up -d
   ```

## Access
- For App1, browse to: 'https://<RHEL8-IP>/app1' or 'http://<RHEL8-IP>:3000'
- For App2, browse to: 'https://<RHEL8-IP>/app2' or 'http://<RHEL8-IP>:3001'


## Delivery
If you have Docker Hub and Git credentials, you can run the Jenkinsfile in a Jenkins server to:

1. Build the images for App1 and App2.
2. Push the images to Docker Hub.
3. Update the tags in the Docker Compose file stored in Git.


