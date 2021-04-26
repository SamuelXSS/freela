import api from '../../appApi';
import moment from 'moment';

const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  const {
    name,
    email,
    birth_date,
    area_code,
    cell_number,
    city,
    complement,
    district,
    street,
    street_number,
    zip_code,
    state
  } = response.data;
  const splitedName = name.split(' ');
  return {
    name,
    nameTag: splitedName.shift().charAt(0) + splitedName.pop().charAt(0),
    email,
    birthDate: moment(birth_date, 'DD/MM/YYYY'),
    cellNumber: `(${area_code}) ${cell_number}`,
    city,
    complement,
    district,
    street,
    street_number,
    zip_code,
    state
  }
}

export {
  getUser
}