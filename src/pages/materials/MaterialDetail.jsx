import Navigation from '../../components/Navigation'
import { useStore } from '../../store/useStore'
import React, { useState } from 'react'
import fileImg from '../../assets/Vector.png'
import { SourcingRequestApi } from '../../apis/materials'

export default function MaterialDetail() {
  const { mode, userData } = useStore()
  const [imagePreview, setImagePreview] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [quantityOfMaterial, setQuantityOfMaterial] = useState('')
  const [collectionArea, setCollectionArea] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setImageFile(file)
    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setImagePreview(reader.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('materialId', '1')
    formData.append('userId', userData.id)
    formData.append('quantityOfMaterial', quantityOfMaterial)
    formData.append('collectionArea', collectionArea)
    formData.append('multipartFile', imageFile)

    console.log(formData)
    for (let key of formData.keys()) {
      console.log(key, ':', formData.get(key))
    }
    try {
      const response = await SourcingRequestApi({ params: formData })
      console.log(response)
    } catch (error) {
      console.error('Error submitting request:', error)
    }
  }

  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation></Navigation>
        <div className="w-56 px-4 py-2 text-base font-light text-center text-black border-2 rounded-tl-md rounded-tr-md">
          Material Sourcing
        </div>
        <hr></hr>
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={handleSubmit}
        >
          <div className="w-11/12 p-16 m-10 border-2 border-gray rounded-3xl">
            <div className="flex w-full h-[250px]">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                className="w-1/4 rounded-3xl"
              ></img>
              <div className="flex flex-col justify-center w-3/4 ml-4">
                <div className="flex mb-4">
                  <div className="w-1/2">
                    <h1>waste leather</h1>
                  </div>
                  <div className="flex justify-end w-1/2 text-center align-middle">
                    <p className="text-[#5ED127]">600p</p>
                    <p className="mt-3 ml-2 text-sm">/1kg</p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 h-1/4">
                  <div className="flex flex-col w-1/2 gap-4 text-sm h-1/2">
                    <h2>Expected Condition</h2>
                    <h2>Produced Item</h2>
                    <h2>Minimum Quantity</h2>
                  </div>
                  <div className="flex flex-col w-1/2 gap-4 text-sm font-light text-center text-gray-300 h-1/2">
                    <p>Good, Intact, Slightly Damaged</p>
                    <p>Wallet</p>
                    <p>2kg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-8">
              <div className="flex">
                <h1 className="mb-2 text-2xl">Collection Area</h1>
              </div>
              <hr></hr>
              <div className="flex flex-col gap-6">
                <div className="flex mt-4">
                  <h2 className="w-1/2 text-sm">Collection Available Area</h2>
                  <p className="w-1/2 text-sm font-light text-gray-300">
                    Seoul and Metropolitan Area, South Korea
                  </p>
                </div>
                <div className="flex">
                  <h2 className="w-1/2 text-sm">Collection Restricted Area</h2>
                  <p className="w-1/2 text-sm font-light text-gray-300">
                    Other Regions in South Korea
                  </p>
                </div>
              </div>
            </div>

            {mode === 'buyer' && (
              <div className="mt-8">
                <div className="mb-2 text-2xl">Request Form</div>
                <hr></hr>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex p-6 mb-4">
                    <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                      <div className="text-center">
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-w-full mt-4 rounded-lg"
                          />
                        )}
                        {!imagePreview && (
                          <>
                            <img
                              className="w-12 h-12 mx-auto text-gray-300"
                              src={fileImg}
                              aria-hidden="true"
                            />
                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileChange}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-x-4 items-center justify-center grid-cols-[200px_300px_50px] ml-10">
                      <p className="text-lg text-end">Quanitity of Material</p>{' '}
                      <input
                        className="p-4 ml-4 text-sm text-center text-gray-300 focus:outline-none bg-slate-50 rounded-xl"
                        type="number"
                        value={quantityOfMaterial}
                        onChange={(e) => setQuantityOfMaterial(e.target.value)}
                      ></input>
                      <p className="text-sm">g</p>{' '}
                      <p className="text-lg text-end">Collection Area</p>
                      <input
                        value={collectionArea}
                        onChange={(e) => setCollectionArea(e.target.value)}
                        type="text"
                        className="p-4 ml-4 text-sm text-center text-gray-300 focus:outline-none bg-slate-50 rounded-xl"
                      ></input>
                    </div>
                  </div>
                  <p className="text-[#CFCFCF] text-sm font-light">
                    If materials are collected in a condition lower than
                    expected, point accrual may not occur.
                  </p>
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="flex h-10 w-1/6 justify-center rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}
