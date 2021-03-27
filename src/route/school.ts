import express from 'express';
import axios from 'axios';

const router = express.Router();

router.route('/').get(async (request, response) => {
    try {
        const res = await axios.get(`http://riapi.seattlesoftwaresolutions.com/api/School`);

        response.status(200).send(res.data);
    } catch (error) {
        console.error(error);
    }
})

router.route('/').put(async (request, response) => {
    const school = request.body;
    try {
        const res = await axios.put(`http://riapi.seattlesoftwaresolutions.com/api/School`, school);

        response.status(200).send(res.data);
    } catch (error) {
        console.error(error);
    }
})

router.route('/').delete(async (request, response) => {
    const { id } = request.query;
    try {
        const res = await axios.delete(`http://riapi.seattlesoftwaresolutions.com/api/School`,
            {
                params: { id }
            }
        )

        response.status(200).send(res.data);
    } catch (error) {
        console.error(error);
    }
})

export default router;