import axios from 'axios'
import {Request, Response} from 'express'

export const getAll = async (req:Request, res:Response) => {
    const users = await axios.get('http://jsonplaceholder.typicode.com/posts')
    const result = users.data
    res.send(result)

}
