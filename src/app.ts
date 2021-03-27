import express from 'express';
import cors from 'cors';
import schoolRoute from './route/school';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors());

app.use('/School', schoolRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});