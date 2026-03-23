const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
    res.send("OrbitWatch Backend Running 🚀");
});

app.get("/debris", async (req, res) => {
    try {
        console.log("Fetching from Celestrak...");

        const response = await fetch(
            "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json",
            {
                headers: {
                    "User-Agent": "OrbitWatch-App",
                    "Accept": "application/json"
                }
            }
        );

        console.log("Celestrak status:", response.status);

        if (!response.ok) {
            throw new Error(`Celestrak error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Records received:", data.length);

        res.json(data);

    } catch (err) {
        console.error("SERVER ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
