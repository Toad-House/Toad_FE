import InputBox from "./InputBox";

export default function MaterialRequestModal() {
  return (
    <div className="p-8 m-2 border-2 border-gray rounded-3xl w-full">
      <form className="w-full">
        <div className="w-full">
          <div className="border-b border-gray-900/10 pb-12 w-full">
            <div className="w-full">
              <h2 className="text-base leading-7 text-gray-300">
                Material Information
              </h2>
              <div className="flex flex-col w-full">
                <InputBox label="Material Type"></InputBox>
                <InputBox label="Minimum Quantitiy"></InputBox>
                <InputBox label="Expected Condition"></InputBox>
                <InputBox label="Produced Item"></InputBox>
                <InputBox label="Points per Weight"></InputBox>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-base leading-7 text-gray-300">
                Collection Area
              </h2>
              <div className="flex flex-col">
                <InputBox label="Restricted Area"></InputBox>
                <InputBox label="Available Area"></InputBox>
              </div>
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
      </form>
    </div>
  );
}
