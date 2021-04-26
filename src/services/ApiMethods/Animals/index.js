import api from '../../appApi';

const getAnimals = async (userId) => {
  return await api.get(`/user/${userId}/animals`);
}

const getAnimal = async (animalId) => {
  return await api.get(`/animals/${animalId}`);
}

const getLotAnimals = async (lotId) => {
  return await api.get(`/lots/${lotId}/animals`);
}

const postAnimals = async (data) => {
  await api.post(`/users/${data.userId}/lots/${data.lotId}/races/${data.raceId}/categories/${data.categoryId}/idType/${data.idType}`, {
    identification: data.identifications,
    gender: data.gender,
    weight: data.weight,
    price: data.price
  })
}

export {
  getAnimals,
  getAnimal,
  getLotAnimals,
  postAnimals
}