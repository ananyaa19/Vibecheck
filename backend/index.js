const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username, secret: username, first_name: username },
      { headers: { "private-key": "2f9c2119-5ba9-422a-ba0e-cc6f3630cc9c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.get("/chats", async (req, res) => {
  try {
    const r = await axios.get("https://api.chatengine.io/chats/", {
      headers: { "private-key": "2f9c2119-5ba9-422a-ba0e-cc6f3630cc9c" },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.patch("/chats/:chatId", async (req, res) => {
  const { chatId } = req.params;
  const { title } = req.body;

  try {
    const r = await axios.patch(
      `https://api.chatengine.io/chats/${chatId}`,
      { title },
      { headers: { "private-key": "2f9c2119-5ba9-422a-ba0e-cc6f3630cc9c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);