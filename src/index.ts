import express from 'express';
import { apiRoutes }  from './routes/apiRoutes';
import { errInvalidPaths } from './controllers/errorsController';
import { handleCustomErrors, handleServerErrors } from './middlewares/error-handler';
const app = express();

app.use(express.json());
app.use('/', apiRoutes);
app.all('/*', errInvalidPaths);

app.use(handleCustomErrors);
app.use(handleServerErrors);

const { NODE_PORT = 8000 } = process.env;

app.listen(NODE_PORT, () => {
    console.log(`listening on port ${NODE_PORT}`);
});