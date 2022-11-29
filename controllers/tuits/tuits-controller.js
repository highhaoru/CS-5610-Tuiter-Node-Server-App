import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.username = "NASA";
    newTuit.handle = "nasa";
    newTuit.image = "nasa.png";
    newTuit.time = "just now";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.likes = 0;
    newTuit.liked = false;
    // newTuit.dislikes = 0;
    // newTuit.disliked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}