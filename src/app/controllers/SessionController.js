import { response } from "express";

class SessionController {
    async store(request, response) {

        const { email, password } = request.body;

        return response.json({ message: 'sessio' });
    }
}

export default new SessionController();