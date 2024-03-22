const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "bill".toUpperCase()
  }
}

module.exports = { handler }
