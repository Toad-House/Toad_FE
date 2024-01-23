export default function InputBox(props) {
  return (
    <div className="flex items-center mt-2 w-full">
      <h3 className="w-40 text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </h3>
      <div className="mt-2">
        <input className="w-full h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-slate-50"></input>
      </div>
    </div>
  );
}
