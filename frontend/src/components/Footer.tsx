'use client';

import Image from 'next/image';
import logo from '../../public/abetka-logo.svg';

const Footer = () => {
  return (
    <>
      <footer className="mx-auto mt-8 w-full max-w-container px-4 sm:px-6 lg:px-8 font-openSans">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mb-16">
          <Image src={logo} alt="" className="h-20 w-auto" />
          <p className="mt-10 max-w-2xl text-lg/6 text-primary font-500">
            Онлайн-школа, яка допомагає учням знайти репетиторів для будь-яких
            шкільних предметів. Платформа забезпечує зручний пошук викладачів та
            пропонує індивідуальні заняття для покращення успішності.
          </p>
          <hr className="mt-10 border-t border-primary" />
        </div>
        <div className="mt-10 mb-8 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div>
            <h3 className="text-base/6 font-semibold text-primary">Навчання</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/marketing/sections/heroes"
                >
                  Підготовка до НМТ
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/marketing/sections/feature-sections"
                >
                  Репетиторство за шкільною програмою
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/marketing/sections/pricing"
                >
                  Англійська мова
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/marketing/sections/header"
                >
                  Математика
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/marketing/sections/newsletter-sections"
                >
                  Історія України
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components#product-marketing"
                >
                  Всі предмети <span>→</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base/6 font-semibold text-primary">
              Вартість послуг
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/application-ui/lists/tables"
                >
                  Підписка на начальний рік
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/application-ui/lists/feeds"
                >
                  Щомісячна підписка
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/application-ui/forms/form-layouts"
                >
                  Комбінований пакет предметів
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components#product-application-ui"
                >
                  Всі послуги <span>→</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base/6 font-semibold text-primary">
              Підібрати викладача
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/ecommerce/components/product-overviews"
                >
                  Репетитор з англійської мови
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/ecommerce/components/product-lists"
                >
                  Репетитор з математики
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/ecommerce/components/category-previews"
                >
                  Репетитор з української мови
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/ecommerce/components/shopping-carts"
                >
                  Репетитор з інформатики
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components/ecommerce/components/category-filters"
                >
                  Репетитор начальної школи
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base/6 text-primary hover:text-gray-900 group-last:text-slate-900 [&amp;>span]:group-last:inline-block [&amp;>span]:group-last:transition [&amp;>span]:group-last:hover:translate-x-0.5"
                  href="/components#product-ecommerce"
                >
                  Всі викладачі <span>→</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base/6 font-semibold text-primary">
              Контакти та підтримка
              <a href=""></a>
            </h3>
          </div>
        </div>
        <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-primary py-6 md:grid-cols-2">
          <p className="text-sm/6 text-slate-600 max-md:text-center font-openSans">
            © 2024 Онлайн-школа &quot;Абетка&quot;. Торгова марка
            використовується на підставі лізенції правовласника
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end">
            <a href="/privacy-policy">Політика конфіденційності</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <a href="/changelog">Лізенція на здійснення освітньої діяльності</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
