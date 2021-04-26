import api from '../../appApi';

const getLots = async (farmId) => {
  return await api.get(`/farms/${farmId}/lots`);
};

const postLots = async (farmId, body) => {
  return await api.post(`/farms/${farmId}/lots`, body);
};

export {getLots, postLots};
