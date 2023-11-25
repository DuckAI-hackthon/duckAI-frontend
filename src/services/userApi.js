import axios from 'axios';

class UserService{
    async registerUser(email, password, name){
        try{
            const result = await axios.post(
                "http://localhost:8000/api/signup/",
                    {
                        email: email,
                        password: password,
                        name: name,
                    },
                );
            return result.status
    }   catch (error) {
            console.error(error)
            return error;
        }
    }
    async loginUser(email, password){
        try{
            const result = await axios.post(
                "http://localhost:8000/api/login/",
                {
                    email: email,
                    password: password
                }
            )
            return result.data;
        }   catch (error){
            console.error(error)
            return error;
        }
    }

    async getHistory(id_user){
        try{
            const result = await axios.get(
                "http://localhost:8000/api/get_historic_by_user/?id_user=" + id_user
            )
            console.log(result.data)
            return result.data;
        } catch (error){
            console.error(error)
            return error;
        }
    }
}

export default new UserService();
