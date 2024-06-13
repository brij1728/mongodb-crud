import React from 'react';

export const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="rounded border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="rounded border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        className="text-bold w-full rounded bg-slate-700 px-5 py-3 text-white"
        type="submit"
      >
        Update Topic
      </button>
    </form>
  );
};
