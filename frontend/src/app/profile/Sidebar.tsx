import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <>
      <div>
        <p>Налаштування профілю</p>
        <Link href="./notifications">Налаштування сповіщень</Link>
        <p>Абонементи на оплата</p>
      </div>
    </>
  );
};

export default Sidebar;
