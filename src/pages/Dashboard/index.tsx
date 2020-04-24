import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7691963?s=460&u=6315520471f98511ce4d355ec16205eecb49d694&v=4"
            alt="Lucas Feitozas"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs & React Native forms!/</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7691963?s=460&u=6315520471f98511ce4d355ec16205eecb49d694&v=4"
            alt="Lucas Feitozas"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs & React Native forms!/</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7691963?s=460&u=6315520471f98511ce4d355ec16205eecb49d694&v=4"
            alt="Lucas Feitozas"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs & React Native forms!/</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
