import DropDown from '@/components/dropdown'
import Menu from '@/components/menu'
import { useState } from "react"

export default function Form(props) {

  const [message, setMessage] = useState("")
  const [colorText, setColorText] = useState(props.colorTextFinal)


  const handleChange = event => {
    setMessage(event.target.value)
  }

  function closeColorPicker(event) {
    props.setColorTextFinal(event.target.value)
    setColorText(event.target.value)
  }


    return (
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>  
            <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Create the card</h3>
                <p className="mt-1 text-sm text-gray-500">This is the playground section. You can play around with the text, the font, the color of your title and date, as well as upload picture or images.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Write the title of your event
                </label>
                <div className="mt-2 flex">
                  <input
                    type="text"
                    placeholder= "Type title here"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-6"
                    onChange={handleChange}
                    value={message}
                  />
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => props.submitClick(message)}
                    >
                        Visualize
                    </button>
                </div>

              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                   Change the date of your event
                </label>
                <div className="mt-2 flex">
                  <input
                    type="date"
                    className="block w-1/2 min-w-0  rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-6"
                  />
                </div>

              </div>
  
              

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    {`Pick the font and the color of your card's title and date`}
                </label>
                <div className="mt-2 flex justify-between">
                    <Menu 
                      title = "Text Font"
                      font = {props.font}
                      loadNewFont={props.loadNewFont}
                      googleFont = {props.googleFont}
                      />
                    <input
                    type="color"
                    value={props.colorText}
                    style={{
                      backgroundColor: colorText
                    }}
                    onChange={(event) => setColorText(event.target.value)}
                    onBlur={(event) => closeColorPicker(event)}
                    className="block w-1/3 min-w-0  rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-6"
                  />
                </div>

              </div>







              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                   {`Change the background color of your card's title and date`}
                </label>
                <div className="mt-2 flex">
                  <input
                    type="color"
                    style={{
                      backgroundColor: props.colorBackgroundFinal
                    }}
                    onBlur={(event) => props.setColorBackgroundFinal(event.target.value)} 
                    className="block w-1/3 min-w-0  rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-6"
                  />
                </div>

              </div>

              <div className="sm:col-span-6">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Select a cover photo for the invitation card
                </label>
                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="pt-8">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-900">Share the card</h3>
              <p className="mt-1 text-sm text-gray-500">This is the section where you can download the card locally or share it with friends and family via e-mail.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">



            <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Download the card locally
                </label>
                <div className="mt-2 flex">

                    <button
                        type="button"
                        className="w-1/3 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Download
                    </button>
                </div>

              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Write the email address where you would like to send this invitation to
                </label>
                <div className="mt-2 flex">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder= "example@gmail.com"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-6"
                  />
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send
                    </button>
                </div>

              </div>
  
            </div>
          </div>
  
        </div>
  

      </form>
    )
  }