import api from '../../appApi';

const getFarm = async (userId) => {
  return await api.get(`/users/${userId}/farms`);
};

const postFarm = async (userId, name, size) => {
  await api.post(`/users/${userId}/farms`, {
    name,
    size,
  });
};

const updateFarm = async (farmId, name, size) => {
  await api.put(`/farms/${farmId}`, {
    name,
    size,
  });
};

export {getFarm, postFarm, updateFarm};
