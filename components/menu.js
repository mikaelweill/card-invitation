export default function Menu(props) {


    const googleFonts = (props.googleFont.items.map(font => {
        return (
        <option  className='text-gray-700 block px-4 py-2 text-sm'>
            {font.family}
        </option>


        )
      }))

    return (
      <div className="relative inline-block text-left w-1/3 ">
   
        <select
          id="location"
          name="location"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => props.loadNewFont(event)}
        >
            {googleFonts}
        </select>
      </div>
    )
  }