
import Body from "@/components/Body";
import EditBanner from "@/components/EditBanner";
import { useState } from "react";


export default function Home() {
  // const [editFormOpen, setEditFormOpen] = useState(false)


  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">

      {/* {editFormOpen && <EditBanner setEditFormOpen={setEditFormOpen} />} */}

      {/* <button onClick={() => setEditFormOpen(!editFormOpen)
       
      } className="text-white font-bold">show editor</button> */}
      

      <Body/>

    </main>
  );
}
