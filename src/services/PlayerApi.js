import axios from "axios";

const playerUrl = "/player";

class PlayerApi {

    List() {
        return axios.get(`${playerUrl}`)
    }


    ListCountOrder(count, order) {
        return axios.get(`${playerUrl}/${count}/${order}`);
    }

    
    ListGetById(id) {
        return axios.get(`${playerUrl}/${id}`);
    }

    
    Create(model) {
        return axios.post(`${playerUrl}`, model);
    }

    
    Edit(id, model) {
        return axios.put(`${playerUrl}/${id}`, model);
    }

    
    Delete(id) {
        return axios.delete(`${playerUrl}/${id}`);
    }
}

export default new PlayerApi();
