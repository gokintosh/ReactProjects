import axios from 'axios'


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID L9_GSlu6kaG8_tolIniec2J78bGEk1UXWiyqRfkFlO4'
    }
});