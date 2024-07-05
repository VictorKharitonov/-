import cl from './team-header.module.scss';

const TeamHeader = () => {
  return (
    <div className={cl.info}>
      <h1 className={cl.title}>Наша команда</h1>
      <h2 className={cl.description}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить
        выход из любых, даже самых сложных ситуаций.
      </h2>
    </div>
  );
};

export default TeamHeader;
