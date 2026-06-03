const http = require("http");

const port = Number(process.env.PORT || 4010);

function json(response, statusCode, body) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(body));
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "GET" && url.pathname === "/health") {
    return json(response, 200, { status: "ok" });
  }

  if (request.method === "GET" && url.pathname.startsWith("/placements/")) {
    const placementId = url.pathname.split("/")[2];
    return json(response, 200, {
      id: placementId,
      candidateId: "CAN-2001",
      status: "ACTIVE",
      role: "QA Automation Engineer"
    });
  }

  if (request.method === "POST" && url.pathname === "/placements") {
    return json(response, 201, {
      id: "PLC-1002",
      candidateId: "CAN-2001",
      status: "CREATED",
      role: "QA Automation Engineer"
    });
  }

  if (request.method === "PATCH" && url.pathname.endsWith("/status")) {
    const placementId = url.pathname.split("/")[2];
    return json(response, 200, {
      id: placementId,
      status: "CANCELLED",
      reason: "Candidate withdrew"
    });
  }

  if (request.method === "GET" && url.pathname.startsWith("/candidates/")) {
    const candidateId = url.pathname.split("/")[2];
    return json(response, 200, {
      id: candidateId,
      firstName: "Ada",
      lastName: "Lovelace",
      availability: "IMMEDIATE"
    });
  }

  return json(response, 404, { error: "Not found" });
});

server.listen(port, () => {
  console.log(`Mock Placement API listening on http://localhost:${port}`);
});

