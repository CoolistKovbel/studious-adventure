"use client"

import CreateToggle from "../create-toggle"

interface SessionOptionsProps {
    hasBot: any;
}

const SessionOptions = ({hasBot}: SessionOptionsProps) => {

    


  return (
    <div className="flex items-center gap-3 mt-4">

    {/* <button className="p-1 font-bold bg-[#222] rounded-md text-md">
      new session
    </button> */}

    <CreateToggle hasBot={hasBot} />

    <form>
      <select
        name="recentSession"
        id="recentSession"
        className="p-1 rounded-md bg-[#222] font-bold p-1"
      >
        <option value="">recent sessions</option>
        <option value="">recent sessions</option>
        <option value="">recent sessions</option>
      </select>
    </form>
    
  </div>
  )
}

export default SessionOptions