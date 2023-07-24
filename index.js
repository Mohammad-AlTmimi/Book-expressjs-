import express from 'express';
const app = express();
const PORT = 3000;
import data from './dist/Data.js';
app.use(express.json());
app.listen(PORT, () => {
    console.log(`App is Running and listening on post ${PORT}`);
});
app.get('/', (req, res) => {
    res.status(200).json(data);
});
app.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 0);
    const Find = data.filter(item => item.id === userId);
    if (Find.length !== 0) {
        res.status(200).send(Find);
        return;
    }
    res.status(400).send({ message: "There is no book like this id number" });
});
app.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 0);
    const Find = data.findIndex(item => item.id === userId);
    if (Find !== -1) {
        data.splice(Find, 1);
        res.status(200).send({ message: "done" });
        return;
    }
    res.status(404).send({ message: "The id you send wrong" });
});
app.post('/', (req, res) => {
});
