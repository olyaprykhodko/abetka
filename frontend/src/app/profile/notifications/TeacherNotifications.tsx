const TeacherNotifications = () => (
  <>
    <fieldset className="border-b border-text pb-12">
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Email
      </legend>
      <div className="mt-6 space-y-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="submissions"
              name="submissions"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="submissions" className="font-medium text-gray-900">
              Завантаження домашніх завдань
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення, коли учні завантажують домашні завдання на
              перевірку.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="questions"
              name="questions"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="questions" className="font-medium text-gray-900">
              Запитання учнів
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові запитання від учнів.
            </p>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset className="border-b border-text pb-12">
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Push
      </legend>
      <div className="mt-6 space-y-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="submissions"
              name="submissions"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="submissions" className="font-medium text-gray-900">
              Завантаження домашніх завдань
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення, коли учні завантажують домашні завдання на
              перевірку.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="questions"
              name="questions"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="questions" className="font-medium text-gray-900">
              Запитання учнів
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові запитання від учнів.
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  </>
);

export default TeacherNotifications;
