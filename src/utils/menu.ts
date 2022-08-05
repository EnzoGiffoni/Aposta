const menuOptions = [
  {
    title: 'Cadastro de Usuário',
    icon: 'user',
    path: '/dashboard/users',
    breadCrumb: 'Usuários',
    id: 1,
    role: ['admin aprovador', 'admin'],
  },
 
  {
    title: 'Cadastro de Ferramentas',
    icon: 'toolsIcon',
    path: '/dashboard/ferramentas',
    breadCrumb: 'Ferramentas',
    id: 4,
    role: ['admin aprovador', 'admin'],
  },
  {
    title: 'Cadastro de EPIs',
    icon: 'helmetIcon',
    path: '/dashboard/epis',
    breadCrumb: 'Equipamento de Proteção Individual (EPI)',
    id: 5,
    role: ['admin aprovador', 'admin'],
  },
  {
    title: 'Cadastro de Treinamentos',
    icon: 'trainingIcon',
    path: '/dashboard/treinamentos',
    breadCrumb: 'Treinamentos',
    id: 6,
    role: ['admin aprovador', 'admin'],
  },
  {
    title: 'Cadastro de Operações',
    icon: 'operationsIcon',
    path: '/dashboard/operacoes',
    breadCrumb: 'Operações',
    id: 7,
    role: ['admin aprovador', 'admin'],
  },
];

export default menuOptions;
