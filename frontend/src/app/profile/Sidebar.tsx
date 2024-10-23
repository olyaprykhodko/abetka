import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/profile">Налаштування профілю</Link>
          </li>
          <li>
            <Link href="/profile/notifications">Налаштування сповіщень</Link>
          </li>
          <li>
            <Link href="/profile/payment">Абонементи на оплата</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
