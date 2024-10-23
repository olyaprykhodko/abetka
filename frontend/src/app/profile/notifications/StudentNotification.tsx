const StudentNotifications = () => (
  <>
    <fieldset className="border-b border-text pb-12">
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Email
      </legend>
      <div className="mt-6 space-y-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="homework"
              name="homework"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="homework" className="font-medium text-gray-900">
              Домашні завдання
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові домашні завдання.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="grades"
              name="grades"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="grades" className="font-medium text-gray-900">
              Оцінки
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові оцінки.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="grades"
              name="grades"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Коментарі
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові коментарі від вчителів.
            </p>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">
        Push
      </legend>
      <div className="mt-6 space-y-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="homework"
              name="homework"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="homework" className="font-medium text-gray-900">
              Домашні завдання
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові домашні завдання.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="grades"
              name="grades"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="grades" className="font-medium text-gray-900">
              Оцінки
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові оцінки.
            </p>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="grades"
              name="grades"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Коментарі
            </label>
            <p className="text-gray-500">
              Отримувати сповіщення про нові коментарі від вчителів.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </fieldset>
  </>
);

export default StudentNotifications;
