import express from 'express';
import cors from 'cors';

const data = [
    {
        id: 1,
        userName: "Khoa đẹp trai"
    },
    {
        id: 2,
        userName: "Nobita"
    }
]
const app = express();

app.use(cors({
    origin: '*'
}));

app.get('/data', (req, res) => {
    res.status(200).send({
        message: 'Thành công!',
        data,
        success: true
    });
});
app.get('', (req, res) => {
    res.send({
        message: 'Hello MindX!',
        class: 'WEB71'
    });
});

app.listen(8088, () => {
    console.log('Server is running!');
})