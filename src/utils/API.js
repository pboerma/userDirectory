import axios from "axios";


// pulls random people for directory

export default{ 
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};