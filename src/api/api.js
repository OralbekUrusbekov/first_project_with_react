import axios from 'axios';

export const  loadSocial =  async () => {
   const response = await axios.get('http://localhost:4000/social');
   return response.data;
}
export const onloadSocial = async (nameId) => {
   const response = await axios.get(`http://localhost:4000/social/${nameId}`);
   return response.data;
}
export const  AllloadSocial =  async (url) => {
   const [socials,types] = await axios.all([
      axios.get(url),
      axios.get('http://localhost:4000/type'),
   ]);
   return [socials.data, types.data];
}

export const  deleteSocial =  async (id) => {
   const response = await axios.delete(`http://localhost:4000/social/${id}`);
   return response.data;
}

export const  saveSocial =  async (qwerty) => {
   console.log(qwerty);
   const response = await axios.post('http://localhost:4000/social',qwerty);
   return response.data;
}

export const  editSocial =  async (obj) => {
   const response = await axios.put(`http://localhost:4000/social/${obj.id}`,obj);
   return response.data;
}

export const showtodo = async () => {
   const response = await axios.get('http://localhost:4000/todo');
   return response.data;
}
export const addtodo = async (asdf) => {
   const response = await axios.get('http://localhost:4000/todo',asdf);
   return response.data;
}
