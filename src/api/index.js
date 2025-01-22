import autos from '../datosMokc';

export const fetchAutos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(autos);
    }, 500); 
  });
};

export const fetchAutoById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const auto = autos.find(a => a.id === parseInt(id));
      if (auto) {
        resolve(auto);
      } else {
        reject(new Error('Auto no encontrado'));
      }
    }, 500); 
  });
};