export async function getData() {
  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env['googleAPIKey']}`)
  const jsonData = await response.json()
  return jsonData
}

export default async function handler(req, res) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}