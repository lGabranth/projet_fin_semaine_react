import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com"

export default class UserService {
  static async list() {
    let users = await axios.get(`${baseUrl}/users`);
    let todos = await axios.get(`${baseUrl}/todos`);

    for (let user of users.data) {
      let nb_done = 0;
      let nb_doing = 0;

      for(const todo of todos.data) {
        if(todo.userId === user.id) {
          if(todo.completed) nb_done++;
          else nb_doing++;
        }
      }

      user.nb_done = nb_done;
      user.nb_doing = nb_doing;
    }

    return users.data;
  }

  static async create(data) {
    return await axios.post(`${baseUrl}/users`, data);
  }

  static async details(id) {
    let user = await axios.get(`${baseUrl}/users/${id}`);
    user = user.data;
    let todos = await axios.get(`${baseUrl}/users/${id}/todos`);
    let nb_done = 0;
    let nb_doing = 0;

    for(const todo of todos.data) {
      if(todo.userId === user.id) {
        if(todo.completed) nb_done++;
        else nb_doing++;
      }
    }
    user.nb_done = nb_done;
    user.nb_doing = nb_doing;

    return user;
  }

  static async update(id, data) {
    return await axios.put(`${baseUrl}/users/${id}`, data);
  }

  static async delete(id) {
    return await axios.delete(`${baseUrl}/users/${id}`);
  }
}