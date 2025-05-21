import { express } from 'express';

const app = express();
const PORT = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
