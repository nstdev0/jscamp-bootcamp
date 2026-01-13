export type Job = {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: {
    technology: string[];
    modalidad: string;
    nivel: string;
  };
  content: {
    description: string;
    responsabilities: string;
    requirements: string;
    about: string;
  };
};
