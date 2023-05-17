export default async function handler(req, res) {

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not supported" });
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not supported" });
  }

  if (req.method === "POST") {
    const request = await fetch(
      "https://api.airtable.com/v0/appyytBXOsZrnu8lV/Table%201",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: req.body.name,
            Email: req.body.email,
            Message: req.body.message,
          },
        }),
      }
    );
    if (request.ok) {
      return res.status(200).json({ msg: "Success" });
    } else {
      return res.status(500).json({ error: "Error " });
    }
  }
}
