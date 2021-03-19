import axios from "axios";
import UserService from "./user.service";

const baseUrl = "https://jsonplaceholder.typicode.com"

export default class TaskService {
  static async list() {
    let tasks =  await axios.get(`${baseUrl}/todos`);
    let users = await UserService.list();

    return tasks.data.map(task => {
      task.user = users.find(user => user.id === task.userId);
      return task;
    });
  }

  static async create(data) {
    return await axios.post(`${baseUrl}/todos`, data);
  }

  static async details(id) {
    let task = await axios.get(`${baseUrl}/todos/${id}`);
    task = task.data;
    task.user = await UserService.details(task.userId);

    return task;
  }

  static async update(id, data) {
    return await axios.put(`${baseUrl}/todos/${id}`, data);
  }

  static async delete(id) {
    return await axios.delete(`${baseUrl}/todos/${id}`);
  }
}