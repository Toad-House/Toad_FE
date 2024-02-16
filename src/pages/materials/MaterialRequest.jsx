import InputBox from '../../components/InputBox'
import Navigation from '../../components/Navigation'
import { Link } from 'react-router-dom'

export default function MaterialRequest() {
  return (
    <div className="p-12 text-4xl font-bold">
      <Navigation></Navigation>
      <div className="w-56 px-4 py-2 text-base font-light text-center text-black border-2 rounded-tl-md rounded-tr-md">
        Material Sourcing
      </div>
      <hr></hr>
      <div className="w-11/12 p-16 m-10 border-2 border-gray rounded-3xl">
        <form className="w-full">
          <div className="w-full">
            <div className="w-full pb-12 border-b border-gray-900/10">
              <div className="w-full">
                <h2 className="mb-4 text-base leading-7 text-gray-300">
                  Material Information
                </h2>
                <div className="flex flex-col w-full">
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Material Type"
                  ></InputBox>
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Minimum Quantitiy"
                  ></InputBox>
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Expected Condition"
                  ></InputBox>
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Produced Item"
                  ></InputBox>
                  <div className="flex items-center">
                    <InputBox
                      inputWrapperSize="w-[10rem]"
                      label="Points per Weight"
                    ></InputBox>
                    <p className="mt-6 ml-4 text-sm font-light">Points / g</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-base leading-7 text-gray-300">
                  Collection Area
                </h2>
                <div className="flex flex-col">
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Restricted Area"
                  ></InputBox>
                  <InputBox
                    inputWrapperSize="w-auto grow"
                    label="Available Area"
                  ></InputBox>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6 gap-x-6">
            <Link
              to="/material"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
